/* eslint-disable react/prop-types, react/no-unknown-property -- R3F props are three.js objects, not DOM attributes */
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { Color, LoopOnce, LoopRepeat, MathUtils } from "three";

export const ROBOT_URL = "/models/robot.glb";

// Re-skin the CC0 "Robot Expressive" as a phosphor robot: dark navy shell,
// steel joints, and a glowing cyan face screen.
function restyle(materials) {
  const { Main, Grey, Black } = materials;
  if (Main) {
    Main.color = new Color("#33507F");
    Main.metalness = 0.35;
    Main.roughness = 0.45;
  }
  if (Grey) {
    Grey.color = new Color("#8FA3C7");
    Grey.metalness = 0.5;
    Grey.roughness = 0.4;
  }
  if (Black) {
    Black.color = new Color("#06121A");
    Black.emissive = new Color("#7FF3F7");
    Black.emissiveIntensity = 0.55;
  }
}

function Robot({ action, facing, onActionDone, onReady }) {
  const group = useRef(null);
  const { scene, animations, materials } = useGLTF(ROBOT_URL, false);
  const { actions, mixer } = useAnimations(animations, group);

  useMemo(() => restyle(materials), [materials]);

  useEffect(() => {
    onReady?.();
  }, [onReady]);

  // Crossfade into the requested clip. One-shot clips hold their last frame
  // and report back so the director can return to Idle.
  useEffect(() => {
    const clip = actions[action.clip];
    if (!clip) return undefined;
    clip.reset();
    clip.setLoop(action.once ? LoopOnce : LoopRepeat, action.once ? 1 : Infinity);
    clip.clampWhenFinished = Boolean(action.once);
    clip.fadeIn(0.25).play();
    return () => clip.fadeOut(0.25);
  }, [action, actions]);

  const doneRef = useRef(onActionDone);
  doneRef.current = onActionDone;
  useEffect(() => {
    const onFinished = (e) => {
      if (e.action === actions[action.clip]) doneRef.current?.(action.id);
    };
    mixer.addEventListener("finished", onFinished);
    return () => mixer.removeEventListener("finished", onFinished);
  }, [mixer, actions, action]);

  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y = MathUtils.damp(group.current.rotation.y, facing, 7, dt);
  });

  return (
    <group ref={group} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

export default Robot;
