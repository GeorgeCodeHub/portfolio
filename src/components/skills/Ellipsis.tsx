import * as THREE from "three";

type Props = {
  xRadius?: number;
  zRadius?: number;
  onClick?: () => void;
};

export default function Ellipsis({ xRadius = 1, zRadius = 1, onClick = () => {} }: Props) {
  const points: THREE.Vector3[] = [];
  for (let index = 0; index < 128; index++) {
    const angle = (index / 128) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);

    points.push(new THREE.Vector3(x, 0, z));
  }
  points.push(points[0]);
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry as any} onClick={onClick}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={5} />
    </line>
  );
}
