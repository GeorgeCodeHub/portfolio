import React, { useState, useEffect, useCallback, useRef } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

// Context
import { JourneyStepsContext } from "../../App";

import { animated, useSprings } from "react-spring";

import { useFrame } from "@react-three/fiber";
import { Html, Environment } from "@react-three/drei";
import * as THREE from "three";

import { Sun1 } from "../../utils/3DModelsPlanets";
import { technicalSkillsData } from "../../utils/dataSet";

import Planet from "./Planet";

import "./Skills.scss";

function SkillsView({
	setChangedView
}: {
	setChangedView: React.Dispatch<
		React.SetStateAction<{
			duration: number;
			isChanged: boolean;
		}>
	>;
}) {
	const isScreenMobile = useMediaQuery("(max-width:500px)");

	const [follow, setFollow] = useState(false);
	const [goToProjects, setGoToProjects] = useState(false);

	const sunRef: any = useRef();

	const selectedPlanetRef: any = useRef();

	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	// Set initial spring settings for animation
	const [springs, setSprings] = useSprings(1, (i) => ({
		opacity: 0,
		transform: `translateY(40px) scale(0.1, 0.1)`,
		width: 50
	}));

	// Show hide info of the Job on hover
	const onHover = useCallback(
		(isHover: any) => {
			setSprings((i) => ({
				opacity: isHover ? 1 : 0,
				transform: isHover ? `translateY(0px) scale(1, 1)` : `translateY(40px) scale(0.1, 0.1)`,
				width: isHover ? "initial" : 50,
				delay: isHover ? i * 100 : i * 100
			}));
		},
		[setSprings]
	);

	const onProjectsClick = useCallback(() => {
		setGoToProjects(true);
		// Set animation for transition from one view to another
		setChangedView({ duration: 1000, isChanged: true });
	}, [setChangedView]);

	// Update position of space station and camera to rotate around the galaxy
	useFrame(({ camera, clock }) => {
		const t = clock.getElapsedTime();
		// Rotate sun on itself
		sunRef.current.rotation.y += 0.001;

		// Set camera in accordance to the selected item
		if (follow) {
			const newCameraPosition = new THREE.Vector3(
				selectedPlanetRef.current.position.x * (selectedPlanetRef.current.userData.size + 1.2),
				4,
				selectedPlanetRef.current.position.z * (selectedPlanetRef.current.userData.size + 1.2)
			);

			camera.position.lerp(newCameraPosition, 0.04);
			camera.lookAt(selectedPlanetRef.current.position);
		} else {
			if (goToProjects) {
				const projectsPosition = new THREE.Vector3(60, -20, -150);
				camera.position.lerp(projectsPosition, 0.0008 * t);
				camera.lookAt(projectsPosition);

				// If camera goes over the below value go to Projects
				if (camera.position.z < -120) {
					// This is a hacky way of updating the state of the item. If setTimeout is removed the UI breaks and keeps both views on the scene
					setTimeout(() => {
						dispatchJourneyStep({ type: "Projects", payload: isScreenMobile });
					}, 0);
				}
			} else {
				camera.position.lerp(journeyStep.cameraPosition, 0.02);
				camera.lookAt(new THREE.Vector3(0, 0, 0));
			}
		}
		camera.updateProjectionMatrix();
	});

	useEffect(() => {
		setChangedView({ duration: 200, isChanged: false });
	}, [setChangedView]);

	return (
		<>
			<ambientLight intensity={0.02} />
			<pointLight position={[0, 0, 0]} />
			<Sun1 ref={sunRef} position={[0, 0, 0]} scale={0.8} />
			<Html className="skill-indicator-container" position={isScreenMobile ? [30, -20, -150] : [60, -20, -150]} center>
				<div className="skill-indicator-title">
					{springs.map((props, index) => (
						<animated.div key={index} style={props}>
							<div>PROJECTS</div>
						</animated.div>
					))}
				</div>
				<b
					className="skill-indicator-pointer"
					onMouseOver={() => onHover(true)}
					onMouseLeave={() => onHover(false)}
					onClick={() => onProjectsClick()}
				>
					{"{⨀}"}
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
