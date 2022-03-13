import React, { useState, useEffect } from "react";

// Context
import { JourneyStepsContext } from "../../App";

import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import SolarSystem from "./SolarSystem";
import Satellite from "./Satellite";

import "./Projects.scss";

import { projectsData } from "../../utils/dataSet";

function ProjectsView({
	setChangedView
}: {
	setChangedView: React.Dispatch<
		React.SetStateAction<{
			duration: number;
			isChanged: boolean;
		}>
	>;
}) {
	const [projectLoaded, setProjectLoaded] = useState(false);

	const { journeyStep } = React.useContext(JourneyStepsContext);

	useFrame(({ camera, clock }) => {
		// Animate camera position before reaching landing spot
		if (!projectLoaded) {
			if (journeyStep.cameraPosition.x === parseFloat(camera.position.x.toFixed(1))) setProjectLoaded(true);

			camera.position.lerp(journeyStep.cameraPosition, 0.04);
			camera.lookAt(new THREE.Vector3(0, 0, 0));
			camera.updateProjectionMatrix();
		}
	});

	useEffect(() => {
		setChangedView({ duration: 500, isChanged: false });
	}, [setChangedView]);

	return (
		<>
			<ambientLight intensity={0.1} />
			{projectLoaded && (
				<PerspectiveCamera position={journeyStep.cameraPosition} makeDefault={journeyStep.step === 5} />
			)}
			<SolarSystem />

			{projectsData.map((item, index) => (
				<Satellite
					key={index}
					id={item.id + 1}
					speed={item.speed}
					offset={item.offset}
					xRadius={item.xRadius}
					zRadius={item.zRadius}
					itemData={item}
				/>
			))}

			{journeyStep.step === 5 && (
				<OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.5} />
			)}
		</>
	);
}

export default ProjectsView;
