import React, { useState, useCallback, useRef } from "react";

// Context
import { JourneyStepsContext } from "../../App";

import { animated, useSprings } from "react-spring";

import { useFrame } from "@react-three/fiber";
import { Html, Environment } from "@react-three/drei";
import * as THREE from "three";

import technicalSkillsData, { Planet } from "./Planets";

import "./Skills.scss";

export const Sun = () => {
	return (
		<mesh>
			<sphereGeometry args={[2.5, 32, 32]} />
			<meshStandardMaterial color="#E1DC59" />
		</mesh>
	);
};

function SkillsView() {
	const [follow, setFollow] = useState(false);
	const [goToProjects, setGoToProjects] = useState(false);

	const selectedPlanetRef: any = useRef();

	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	// Set initial spring settings for animation
	const [springs, setSprings] = useSprings(1, (i) => ({
		opacity: 0,
		transform: `translateY(40px) scale(0.8, 0.2)`
	}));

	// Show hide info of the Job on hover
	const onHover = useCallback(
		(isHover: any) => {
			setSprings((i) => ({
				opacity: isHover ? 1 : 0,
				transform: isHover ? `translateY(0px) scale(1, 1)` : `translateY(40px) scale(0.8, 0.2)`,

				delay: isHover ? i * 100 : i * 100
			}));
		},
		[setSprings]
	);

	const onProjectsClick = useCallback(() => {
		setGoToProjects(true);
	}, []);

	// Update position of space station and camera to rotate around the galaxy
	useFrame(({ camera }) => {
		// Set camera in accordance to the selected item
		if (follow) {
			const newCameraPosition = new THREE.Vector3(
				selectedPlanetRef.current.position.x * (selectedPlanetRef.current.userData.size / 2 + 1.1),
				4,
				selectedPlanetRef.current.position.z * (selectedPlanetRef.current.userData.size / 2 + 1.1)
			);

			camera.position.lerp(newCameraPosition, 0.04);
			camera.lookAt(selectedPlanetRef.current.position);
		} else {
			if (goToProjects) {
				const projectsPosition = new THREE.Vector3(60, -20, -150);
				camera.position.lerp(projectsPosition, 0.05);
				camera.lookAt(projectsPosition);

				// If camera goes over the below value go to Projects
				if (camera.position.z < -120) {
					// This is a hacky way of updating the state of the item. If setTimeout is removed the UI breaks and keeps both views on the scene
					setTimeout(() => {
						dispatchJourneyStep({ type: "Projects" });
					}, 0);
				}
			} else {
				camera.position.lerp(journeyStep.cameraPosition, 0.02);
				camera.lookAt(new THREE.Vector3(0, 0, 0));
			}
		}
		camera.updateProjectionMatrix();
	});

	return (
		<>
			<pointLight position={[0, 0, 0]} />
			<Sun />
			<Html className="exp-indicator-container" position={[60, -20, -150]} center>
				<div className="exp-indicator-title">
					{springs.map((props, index) => (
						<animated.div key={index} style={props}>
							<div>PROJECTS</div>
							<hr />
						</animated.div>
					))}
				</div>
				<b
					className="exp-indicator-pointer"
					onMouseOver={() => onHover(true)}
					onMouseLeave={() => onHover(false)}
					onClick={() => onProjectsClick()}
				>
					{"{ ● }"}
				</b>
			</Html>
			<group
				onPointerMissed={(e) => {
					setFollow(false);
				}}
			>
				{technicalSkillsData.map((technicalSkillItem) => (
					<Planet
						ref={selectedPlanetRef}
						technicalSkillItem={technicalSkillItem}
						key={technicalSkillItem.id}
						follow={follow}
						setFollow={setFollow}
					/>
				))}
			</group>
			<Environment preset="warehouse" />
		</>
	);
}

export default SkillsView;
