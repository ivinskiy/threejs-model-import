import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

export const Base = () => {
  const texture = useLoader(THREE.TextureLoader, "./warhammerMap.jpeg");
  texture.minFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[-15, 0, 25]}>
      <planeGeometry attach="geometry" args={[150, 150]} />
      <meshPhongMaterial attach="material" map={texture} />
    </mesh>
  );
};
