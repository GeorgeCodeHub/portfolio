import React, { useState, useCallback } from "react";

import { JourneyStepsContext } from "../../App";

import { useSprings, animated } from "react-spring";

import { Html, PresentationControls, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

import { DegreesListComponent, CertificateListComponent } from "./EducationLists";

import { degreesList, certificateList } from "../../utils/dataSet";

import "./Education.scss";
import "../experience/Experience.scss";

function EducationView() {
	const [goToSkills, setGoToSkills] = useState(false);

	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

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
	};

	useFrame(({ camera, clock }) => {
		// Fix camera position to zoom out of item
		if (goToSkills) {
			const t = clock.getElapsedTime();
			const newCameraPosition = new THREE.Vector3(0, 0, -100);

			if (camera.position.z < -70) {
				// This is a hacky way of updating the state of the item. If setTimeout is removed the UI breaks and keeps both views on the scene
				setTimeout(() => {
					dispatchJourneyStep({ type: "Skills" });
				}, 0);
			}

			camera.position.lerp(newCameraPosition, 0.001 * t);
			camera.lookAt(newCameraPosition);
		} else {
			camera.position.lerp(journeyStep.cameraPosition, 0.02);
			camera.lookAt(new THREE.Vector3(0, 0, 0));
			camera.updateProjectionMatrix();
		}
	});

	return (
		<PresentationControls global rotation={goToSkills ? [0, 0, 0] : [0, -1.2, 0]}>
			<Float
				speed={0.4} // Animation speed, defaults to 1
				rotationIntensity={0.4} // XYZ rotation intensity, defaults to 1
				floatIntensity={0.4} // Up/down float intensity, defaults to 1
			>
				<mesh
					scale={0.1}
					position={[0, 0, 1.2]}
					onPointerOver={(e) => [e.stopPropagation(), onHover(true)]}
					onPointerOut={(e) => onHover(false)}
					onClick={() => {
						onSkillsClick();
					}}
				>
					<sphereGeometry />
					<meshPhysicalMaterial color="orange" transmission={1} thickness={-2} envMapIntensity={5} />
					<Html
						className="exp-indicator-container"
						scale={3}
						position={[0, 1.2, 0]}
						rotation={[0, 0, 0]}
						center
						transform
						occlude
					>
						<div className="exp-indicator-title">
							{springs.map((props, index) => (
								<animated.div key={index} style={props}>
									<div>SKILLS</div>
									<hr />
								</animated.div>
							))}
						</div>
					</Html>
				</mesh>
				<mesh position={[0, 0, 0]}>
					<cylinderBufferGeometry args={[1, 1, 2, 32]} />
					<meshBasicMaterial attach="material" color="hotpink" />
					<DegreesListComponent list={degreesList} />
					<CertificateListComponent list={certificateList} />
				</mesh>
			</Float>
		</PresentationControls>
	);
}

export default EducationView;
