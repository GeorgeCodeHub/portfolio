import React, { useState, useEffect, useCallback } from "react";

// Context
import { DatasetContext } from "../CanvasView";

import LoadingPanel from "../../utils/LoadingPanel";

import { JourneyStepsContext } from "../../App";

import useMediaQuery from "@mui/material/useMediaQuery";

import { useSprings, animated } from "react-spring";

import { Html, OrbitControls, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { DegreesListComponent, CertificateListComponent } from "./EducationLists";

import { SpaceBase, SpaceShip1, SpaceShip2, SpaceShip3 } from "../../utils/3DModelsSpaceBase";

import "./Education.scss";
import "../experience/Experience.scss";

function EducationView({
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

	const [projectLoaded, setProjectLoaded] = useState(false);
	const [goToSkills, setGoToSkills] = useState(false);

	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	const dataset = React.useContext(DatasetContext);

	// Set initial spring settings for animation
	const [springs, setSprings] = useSprings(1, (i) => ({
		opacity: 0,
		transform: `translateY(40px) scale(0.8, 0.2)`
	}));

	// Show hide info of the Step on hover
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

	const onSkillsClick = () => {
		setGoToSkills(true);
		// Set animation for transition from one view to another
		setChangedView({ duration: 500, isChanged: true });
	};

	useFrame(({ camera, clock }) => {
		// Fix camera position to zoom out of item
		if (goToSkills) {
			const t = clock.getElapsedTime();
			const newCameraPosition = new THREE.Vector3(50, 0, -100);

			camera.position.lerp(newCameraPosition, 0.0008 * t);
			camera.lookAt(newCameraPosition);

			// If camera goes over the below value go to Skills
			if (camera.position.z < -70) {
				// This is a hacky way of updating the state of the item. If setTimeout is removed the UI breaks and keeps both views on the scene
				setTimeout(() => {
					dispatchJourneyStep({ type: "Skills", payload: isScreenMobile });
				}, 0);
			}
		} else {
			// Animate camera position before reaching landing spot
			if (!projectLoaded) {
				if (
					journeyStep.cameraPosition.x === parseFloat(camera.position.x.toFixed(1)) &&
					journeyStep.cameraPosition.z === parseFloat(camera.position.z.toFixed(1))
				)
					setProjectLoaded(true);

				camera.position.lerp(journeyStep.cameraPosition, 0.08);
				camera.lookAt(new THREE.Vector3(0, 0, 0));
				camera.updateProjectionMatrix();
			}
		}
	});

	useEffect(() => {
		setChangedView({ duration: 200, isChanged: false });
	}, [setChangedView]);

	if (dataset.degrees.length === 0) return <LoadingPanel />;

	return (
		<>
			{/* Lights */}
			<ambientLight intensity={0.02} />
			<pointLight position={[-5, 2, 0]} />

			<mesh
				scale={0.1}
				position={[0, 0, 0]}
				onPointerOver={(e) => [e.stopPropagation(), onHover(true)]}
				onPointerOut={(e) => onHover(false)}
			>
				<Html
					className="exp-indicator-container"
					scale={3}
					position={[0, 1, 0]}
					rotation={[0, -Math.PI / 5, 0]}
					center
					transform
					occlude
				>
					<div className="exp-indicator-title">
						{springs.map((props, index) => (
							<animated.div key={index} style={props}>
								<div>SKILLS</div>
							</animated.div>
						))}
					</div>
					<div
						className="exp-indicator-pointer"
						style={{ transform: "rotate(270deg)" }}
						onMouseOver={() => onHover(true)}
						onMouseLeave={() => onHover(false)}
						onClick={() => {
							onSkillsClick();
						}}
					>
						<ArrowForwardIosIcon />
					</div>
				</Html>
			</mesh>
			<mesh position={[1, 0, 0.5]} rotation={[0, Math.PI / 3, 0]}>
				<DegreesListComponent list={dataset.degrees} />
			</mesh>
			<mesh position={[-1, 0, -0.6]} rotation={[0, -Math.PI / 1.5, 0]}>
				<CertificateListComponent list={dataset.certificates} />
			</mesh>
			<SpaceBase position={[0, 0, 0]} rotation={[Math.PI / 2, 0, Math.PI / 6]} />

			{/* Random spaceships inside the space station */}
			<Float rotationIntensity={0.5} floatIntensity={0.5} speed={0.2}>
				<SpaceShip1 position={[0.1, 0.2, 0.5]} scale={0.02} rotation={[0, Math.PI / 3, 0]} />
			</Float>
			<Float rotationIntensity={0.6} floatIntensity={0.5} speed={0.1}>
				<SpaceShip2 position={[0.05, 0.3, -0.5]} scale={0.02} rotation={[0, Math.PI / 2, 0]} />
			</Float>
			<Float rotationIntensity={0.55} floatIntensity={0.3} speed={0.6}>
				<SpaceShip3 position={[1, -0.6, 1.8]} scale={0.02} rotation={[0, Math.PI / 1, 0]} />
			</Float>

			<OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 1.7} />
		</>
	);
}

export default EducationView;
