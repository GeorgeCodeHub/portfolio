import { Html } from "@react-three/drei";

function Planet({ position }: { position: { x: number; y: number; z: number } }) {
	return (
		<mesh position={[position.x, position.y, position.z]}>
			<sphereBufferGeometry args={[10, 64, 64]} />
			<meshPhysicalMaterial envMapIntensity={0.4} clearcoat={0.8} clearcoatRoughness={0} roughness={1} metalness={0} />
			<Html className="skill-type-title" position={[0, 0, 0]} center>
				<b>Front-End</b>
			</Html>
		</mesh>
	);
}

export default Planet;
