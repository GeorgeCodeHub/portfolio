import React, { useState, useEffect } from "react";

// Context
import { JourneyStepsContext } from "../../App";

import { useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

import SolarSystem from "./SolarSystem";
import Satellite from "./Satellite";

import "./Projects.scss";

const random = (a: number, b: number) => a + Math.random() * b;

let projectsData: any[] = [
	{
		title: "Project 1",
		description: "Some text that goes on and on and on and on and on and on and on and on",
		technologies: ["ReactJS", "Python"],
		images: ["Image1", "Image2"],
		githubURL: "http",
		runningAppURL: "http"
	},
	{
		title: "Project 2",
		description: "Some text that goes on and on and on and on and on and on",
		technologies: ["ReactJS"],
		images: ["Image1", "Image2"],
		githubURL: "http",
		runningAppURL: ""
	},
	{
		title: "Project 3",
		description: "Some text that goes on and on and on and on",
		technologies: ["ReactJS", "Python", "PostgreSQL"],
		images: ["Image1", "Image2"],
		githubURL: "http",
		runningAppURL: "http"
	},
	{
		title: "Project 4",
		description: "Some text that goes on and on and on and on and on and on and on and on and on and on and on and on",
		technologies: ["Python", "Tensorflow"],
		images: ["Image1", "Image2"],
		githubURL: "http",
		runningAppURL: "http"
	}
];

projectsData = projectsData.map((item, index) => ({
	...item,
	id: index,
	xRadius: random(1, 4) + 4,
	zRadius: random(1, 4) + 4,
	size: random(0.5, 1),
	speed: random(0.05, 0.1),
	offset: random(0, Math.PI * 4),
	rotationSpeed: random(0.008, 0.004)
}));

function ProjectsView() {
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

	return (
		<>
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
