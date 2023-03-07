import { Suspense, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import * as THREE from "three";
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
    if (controlsRef.current) {
      controlsRef.current.listenToKeyEvents(window);
      controlsRef.current.keys = {
        LEFT: "KeyA",
        UP: "KeyW",
        RIGHT: "KeyD",
        BOTTOM: "KeyS",
      };
      controlsRef.current.mouseButtons = {
        LEFT: THREE.MOUSE.PAN,
        MIDDLE: THREE.MOUSE.DOLLY,
        RIGHT: THREE.MOUSE.ROTATE,
      };
      controlsRef.current.keyPanSpeed = 30;
      console.log(controlsRef.current);
    }
  }, [controlsRef]);
  return (
    <GameContainer>
      <Canvas shadows orthographic>
        <ambientLight />
        <pointLight position={[10, 10, 10]} castShadow />
        <PerspectiveCamera
          position={[10, 10, 10]}
          rotation={[-Math.PI / 4, 0, 0]}
          makeDefault
        />
        <MapControls ref={controlsRef} />
        <Suspense>
          <Base />
          <Model src="./Armaud.stl" position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </GameContainer>
  );
}

export default App;
