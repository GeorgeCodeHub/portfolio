import React, { useRef } from "react";
import { Points, Point } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import StarImage from "../images/star.png";

const starIcon = new THREE.TextureLoader().load(StarImage);

type Props = { enableFalling?: boolean };

export default function StarsCube({ enableFalling = false }: Props) {
  const points = useRef<any>(null);

  const numberOfStars = 500;
  const starHeight = 200;

  const flakePositions = new Array(numberOfStars).fill(undefined).map(() => {
    const starPos = new THREE.Vector3();
    starPos.x = Math.random() * starHeight - starHeight / 2;
    starPos.y = Math.random() * starHeight - starHeight / 2;
    if (enableFalling) starPos.z = -Math.random() * starHeight;
    else starPos.z = Math.random() * starHeight - starHeight / 2;

    return starPos;
  });

  useFrame(() => {
    if (enableFalling && points.current) {
      // children are Points->Point instances
      // @ts-ignore
      points.current.children.forEach((point: any) => {
        point.position.z += 0.5;
        if (point.position.z >= 10) point.position.z = -starHeight;
      });
    }
  });

  return (
    <Points ref={points as any}>
      <pointsMaterial
        size={0.5}
        opacity={1}
        attach="material"
        map={starIcon}
        alphaMap={starIcon}
        depthTest={true}
        transparent={false}
        premultipliedAlpha={true}
        sizeAttenuation={true}
        depthWrite={false}
        vertexColors={true}
        blending={THREE.AdditiveBlending}
      />

      {flakePositions.map((pos, index) => (
        <Point key={index} position={pos as any} />
      ))}
    </Points>
  );
}
