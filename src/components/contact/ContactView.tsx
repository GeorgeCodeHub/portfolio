import React, { useState, useCallback } from "react";

import { JourneyStepsContext } from "../../App";

import { animated, useSprings } from "react-spring";

import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

import RoomIcon from "@mui/icons-material/Room";

import ContactForm from "./ContactForm";

import "./Contact.scss";

function ContactView() {
	const [markerOcclude, setMarkerOcclude] = useState<boolean>();

	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	// Set initial spring settings for animation
	const [springs, setSprings] = useSprings(1, (i) => ({
		opacity: 0,
		transform: `translateY(40px) scale(0.8, 0.2)`
	}));

	// Show/hide title of the marker on hover
	const onHover = useCallback(
		(isHover: any) => {
			if (journeyStep.step === 5)
				setSprings((i) => ({
					opacity: isHover ? 1 : 0,
					transform: isHover ? `translateY(0px) scale(1, 1)` : `translateY(40px) scale(0.8, 0.2)`,

					delay: isHover ? i * 100 : i * 100
				}));
		},
		[setSprings, journeyStep.step]
	);

	const onContactMarkerClick = useCallback(() => {
		if (journeyStep.step === 5) {
			dispatchJourneyStep({ type: "Contact" });
			onHover(false);
		}
	}, [journeyStep.step, dispatchJourneyStep, onHover]);

	const onContactMarkerMiss = useCallback(() => {
		if (journeyStep.step === 6) dispatchJourneyStep({ type: "Projects" });
	}, [journeyStep.step, dispatchJourneyStep]);

	const onContactMarkerOcclude = useCallback((value: boolean) => {
		setMarkerOcclude(value);
		return null;
	}, []);

	useFrame(({ camera, clock }) => {
		const t = clock.getElapsedTime() * 0.04;

		const x = 3.9 * Math.sin(t);
		const y = 3.2;
		const z = 3.9 * Math.cos(t);

		if (journeyStep.step === 6) {
			const newCameraPosition = new THREE.Vector3(x * 2, y / 1.1, z * 2);

			camera.position.lerp(newCameraPosition, 0.06);
			camera.lookAt(new THREE.Vector3(0, 4.8, 0));
			camera.updateProjectionMatrix();
		}
	});

	const meshPosition: [x: number, y: number, z: number] = journeyStep.step === 6 ? [0.08, 3.26, 3.9] : [0.08, 3.9, 3.9];

	return (
		<mesh position={meshPosition}>
			<Html
				className="marker-indicator-container"
				position={[0, 0, 0]}
				scale={1}
				// Hide contents "behind" other meshes
				occlude
				// Tells us when contents are occluded (or not)
				onOcclude={onContactMarkerOcclude}
				// We just interpolate the visible state into css opacity and transforms
				style={{
					transition: "all 0.2s",
					opacity: markerOcclude ? 0 : 1
				}}
				center
			>
				<div className="marker-indicator-title">
					{springs.map((props, index) => (
						<animated.div key={index} style={props}>
							<div>CONTACT</div>
							<hr />
						</animated.div>
					))}
				</div>

				<RoomIcon
					className="marker-indicator-pointer"
					onMouseOver={() => onHover(true)}
					onMouseLeave={() => onHover(false)}
					onClick={() => onContactMarkerClick()}
				/>
			</Html>
			<Html>
				<ContactForm isOpen={journeyStep.step === 6} onContactBackDropClick={onContactMarkerMiss} />
			</Html>
		</mesh>
	);
}

export default ContactView;
