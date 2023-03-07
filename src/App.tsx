import { Suspense, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { GameContainer } from "./App.styles";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  FlyControls,
  MapControls,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Base } from "./components/Base/Base";
import { Model } from "./components/Model/Model";

function App() {
  const controlsRef = useRef();
  const cameraRef = useRef();
  useEffect(() => {
    console.log(controlsRef.current);
    if (controlsRef.current) {
      console.log(cameraRef);
      controlsRef.current.listenToKeyEvents(window);
      controlsRef.current.keys = {
        LEFT: "KeyA",
        UP: "KeyW",
        RIGHT: "KeyD",
        BOTTOM: "KeyS",
      };
      controlsRef.current.keyPanSpeed = 30;
      console.log(controlsRef.current);
      window.addEventListener("keydown", (event) => {
        if (event.key === "q") {
          const x = cameraRef.current.rotation.x;
          const y = cameraRef.current.rotation.y + 0.01;
          const z = cameraRef.current.rotation.z;
          cameraRef.current.rotation.set({ x, y, z });
        }
      });
    }
  }, [controlsRef]);
  return (
    <GameContainer>
      <Canvas shadows>
        <ambientLight />
        <pointLight position={[10, 10, 10]} castShadow />
        <PerspectiveCamera
          ref={cameraRef}
          position={[10, 10, 10]}
          rotation={[-Math.PI / 4, 0, 0]}
          makeDefault
        />
        <MapControls ref={controlsRef} enableRotate />
        <Suspense>
          <Base />
          <Model src="./Armaud.stl" position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </GameContainer>
  );
}

export default App;
