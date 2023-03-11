import React, { Ref, useRef, useState } from "react";
import { extend, Vector3 } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { Text3D } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

export const Marker = ({
  position,
  sessionNr,
  onClickHandler,
}: {
  position: Vector3;
  sessionNr: number;
  onClickHandler: () => void;
}) => {
  const torusRef = useRef<Ref<MeshBasicMaterial> | undefined>();
  const [torusColor, setTorusColor] = useState("yellow");
  return (
    <group
      position={position}
      castShadow
      onPointerEnter={() => {
        setTorusColor("blue");
      }}
      onPointerLeave={() => {
        setTorusColor("yellow");
      }}
      onClick={onClickHandler}
    >
      <mesh>
        <torusGeometry args={[1, 0.15, 16, 100]} />
        <meshBasicMaterial
          color={torusColor}
          ref={torusRef as Ref<MeshBasicMaterial> | undefined}
        />
      </mesh>
      <mesh>
        <planeGeometry args={[1.8, 1.8]} />
        <meshBasicMaterial transparent opacity={0.01} />
      </mesh>
      <mesh>
        <Text3D
          font={"fantasyFont.json"}
          castShadow
          position={[-0.2, -0.4, -0.15]}
        >
          {sessionNr}
          <meshStandardMaterial color={"black"} />
        </Text3D>
      </mesh>
    </group>
  );
};
