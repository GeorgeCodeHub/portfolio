import React, { useRef } from "react";

import { useFrame } from "@react-three/fiber";

import { Sun2, Earth, Moon } from "../../utils/3DModelsPlanets";

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

		sunRef.current.rotation.y += 0.005;

		// Rotate moon around Earth
		const moonX = 60 * Math.sin(moonTime);
		const moonZ = 60 * Math.cos(moonTime);

		moonRef.current.position.x = moonX;
		moonRef.current.position.z = moonZ;

		// Rotate earth on itself
		earthRef.current.rotation.y += 0.00100005;
	});

	return (
		<>
			{/* Sun */}
			<Sun2 ref={sunRef}>
				<pointLight position={[0, 0, 0]} />
			</Sun2>

			{/* Earth */}
			<Earth ref={earthRef} position={[0, 0, 0]} scale={0.77}>
				<ContactView />
			</Earth>

			{/* Moon */}
			<Moon ref={moonRef} scale={0.27} />
		</>
	);
}

export default SolarSystem;
