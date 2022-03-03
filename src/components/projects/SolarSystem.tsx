import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";

import ContactView from "../contact/ContactView";

function SolarSystem() {
	const sunRef: any = useRef();
	const moonRef: any = useRef();
	const earthRef: any = useRef();

	useFrame(({ clock }) => {
		const sunTime = clock.getElapsedTime() * 0.03;
		const moonTime = clock.getElapsedTime() * 0.06;

		// Rotate Sun around Earth
		const sunX = -200 * Math.sin(sunTime);
		const sunZ = -200 * Math.cos(sunTime);

		sunRef.current.position.x = sunX;
		sunRef.current.position.z = sunZ;

		// Rotate moon around Earth
		const moonX = 60 * Math.sin(moonTime);
		const moonZ = 60 * Math.cos(moonTime);

		moonRef.current.position.x = moonX;
		moonRef.current.position.z = moonZ;

		// Rotate earth on itself
		earthRef.current.rotation.y += 0.0006;
	});

	return (
		<>
			{/* Sun */}
			<mesh ref={sunRef}>
				<pointLight position={[0, 0, 0]} />
				<sphereGeometry args={[2, 64, 64]} />
				<meshStandardMaterial color="#E1DC59" />
			</mesh>

			{/* Earth */}
			<mesh ref={earthRef} position={[0, 0, 0]}>
				<sphereGeometry args={[4, 64, 64]} />
				<meshStandardMaterial color="blue" />
			</mesh>

			{/* Contact Marker */}
			<ContactView />

			{/* Moon */}
			<mesh ref={moonRef}>
				<sphereGeometry args={[2, 64, 64]} />
				<meshStandardMaterial color="blue" />
			</mesh>
		</>
	);
}

export default SolarSystem;
