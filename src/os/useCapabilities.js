import { useMemo } from "react";
import useReducedMotion from "../ui/useReducedMotion";

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

// Decides how much animation this device gets. The 3D bot only runs when
// motion is allowed, WebGL exists and the device isn't obviously low-end.
export default function useCapabilities() {
  const reducedMotion = useReducedMotion();

  const device = useMemo(() => {
    const cores = navigator.hardwareConcurrency ?? 8;
    const memory = navigator.deviceMemory ?? 8;
    return {
      webgl: hasWebGL(),
      lowEnd: cores <= 4 || memory <= 4,
      touch: window.matchMedia("(pointer: coarse)").matches,
    };
  }, []);

  return {
    ...device,
    reducedMotion,
    canRun3D: device.webgl && !device.lowEnd && !reducedMotion,
  };
}
