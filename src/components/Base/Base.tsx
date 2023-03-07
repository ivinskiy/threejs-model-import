import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

export const Base = () => {
  const texture = useLoader(THREE.TextureLoader, "./warhammerMap.jpeg");
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry attach="geometry" args={[150, 150]} />
      <meshPhongMaterial attach="material" map={texture} />
    </mesh>
  );
};
