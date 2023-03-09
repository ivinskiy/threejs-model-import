import React from "react";
import { extend } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { Text3D } from "@react-three/drei";

export const Marker = ({ position }) => {
  return (
    <mesh
      position={position}
      castShadow
      onClick={() => {
        console.log("Hello");
      }}
    >
      <Text3D font={"fantasyFont.json"} castShadow>
        {"Session 1"}
        <meshStandardMaterial color={"black"} />
      </Text3D>
    </mesh>
  );
};
