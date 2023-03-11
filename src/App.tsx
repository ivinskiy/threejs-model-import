import { Suspense, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import * as THREE from "three";
import { GameContainer } from "./App.styles";
import { Canvas, Vector3 } from "@react-three/fiber";
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
  const [lookAt, setLookAt] = useState<number[]>([0, 0, 0]);
  const controlsRef = useRef();
  const cameraRef = useRef();

  const markerPositions = [
    [19.5, 2, -8.5],
    [28, 2, -8],
    [37.5, 2, -10],
  ];

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
          // lookAt={() => lookAt}
        />
        {enableOrbitControls ? (
          <OrbitControls makeDefault />
        ) : (
          <MapControls ref={controlsRef} />
        )}
        <Suspense>
          <Base />
          {markerPositions.map((pos, index) => (
            <Marker
              position={pos as Vector3}
              sessionNr={index + 1}
              onClickHandler={() => {
                setLookAt([19.5, 2, -8.5]);
              }}
            />
          ))}

          <Model src="./Armaud.stl" position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </GameContainer>
  );
}

export default App;
