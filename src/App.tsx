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
import { Marker } from "./components/Marker/Marker";

function App() {
  const [enableOrbitControls, setEnableOrbitControls] = useState(false);
  const controlsRef = useRef();
  const cameraRef = useRef();
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "q") {
        setEnableOrbitControls((prev) => !prev);
      }
    });
    if (controlsRef.current) {
      controlsRef.current.listenToKeyEvents(window);
      controlsRef.current.keys = {
        LEFT: "KeyA",
        UP: "KeyW",
        RIGHT: "KeyD",
        BOTTOM: "KeyS",
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
        {/* <pointLight position={[17.5, 10, -7]} castShadow /> */}

        <PerspectiveCamera
          position={[0, 10, 10]}
          rotation={[0, -Math.PI / 4, 0]}
          makeDefault
        />
        {enableOrbitControls ? (
          <OrbitControls makeDefault />
        ) : (
          <MapControls ref={controlsRef} />
        )}
        <Suspense>
          <Base />
          <Marker position={[17.5, 0, -8.5]} />
          <Model src="./Armaud.stl" position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </GameContainer>
  );
}

export default App;
