import { useLoader, Vector3 } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import React from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Model = ({
  src,
  position,
}: {
  src: string;
  position: Vector3;
}) => {
  //   const geom = useLoader(STLLoader, src);
  const gltf = useLoader(GLTFLoader, "/Arnault.gltf");
  gltf.scene.castShadow = true;
  gltf.scene.receiveShadow = true;
  gltf.nodes["Armaud"].castShadow = true;
  console.log(gltf);

  return (
    <mesh scale={[0.05, 0.05, 0.05]} position={position} castShadow>
      <primitive object={gltf.nodes["Armaud"]} />;
    </mesh>
  );
};
