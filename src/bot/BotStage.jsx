/* eslint-disable react/prop-types, react/no-unknown-property -- R3F props are three.js objects, not DOM attributes */
import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import Robot, { ROBOT_URL } from "./Robot";

useGLTF.preload(ROBOT_URL, false);

function usePageVisible() {
  const [visible, setVisible] = useState(() => !document.hidden);
  useEffect(() => {
    const onChange = () => setVisible(!document.hidden);
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);
  return visible;
}

// The one WebGL canvas on the site. It lives in its own chunk and stays
// mounted across routes; only the wrapper around it moves.
function BotStage({ action, facing, onActionDone, onReady, touch }) {
  const visible = usePageVisible();

  return (
    <Canvas
      frameloop={visible ? "always" : "never"}
      resize={{ offsetSize: true }}
      dpr={[1, touch ? 1.25 : 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [0, 2.4, 13], fov: 24 }}
      onCreated={({ camera }) => camera.lookAt(0, 2.3, 0)}
      style={{ pointerEvents: "none" }}
    >
      <hemisphereLight args={["#CFFAFC", "#0C1322", 1.6]} />
      <directionalLight position={[3, 6, 8]} intensity={2.4} />
      <directionalLight position={[-5, 4, -6]} intensity={6} color="#7FF3F7" />
      <Suspense fallback={null}>
        <Robot action={action} facing={facing} onActionDone={onActionDone} onReady={onReady} />
      </Suspense>
    </Canvas>
  );
}

export default BotStage;
