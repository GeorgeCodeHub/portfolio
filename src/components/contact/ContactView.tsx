import React, { useState, useCallback, useRef } from "react";

import { JourneyStepsContext } from "../../App";

import { animated, useSprings } from "react-spring";

import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

import IconButton from "@mui/material/IconButton";
import RoomIcon from "@mui/icons-material/Room";

import ContactForm from "./ContactForm";

import "./Contact.scss";

function ContactView() {
	const [markerOcclude, setMarkerOcclude] = useState<boolean>();

	const contactMarkerRef: any = useRef();

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
		const t = clock.getElapsedTime() * 0.06;

		const x = 3.8 * Math.sin(t);
		const y = 2;
		const z = 3.8 * Math.cos(t);

		contactMarkerRef.current.position.x = x;
		contactMarkerRef.current.position.y = y;
		contactMarkerRef.current.position.z = z;

		if (journeyStep.step === 6) {
			const newCameraPosition = new THREE.Vector3(x * 2, y / 1.1, z * 2);

			camera.position.lerp(newCameraPosition, 0.06);
			camera.lookAt(new THREE.Vector3(0, 4.5, 0));
			camera.updateProjectionMatrix();
		}
	});

	return (
		<group>
			<mesh ref={contactMarkerRef}>
				{/* <sphereGeometry args={[0.1, 64, 64]} />
			<meshStandardMaterial color="#E1DC59" /> */}
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
					<IconButton size="large" aria-label="Go to Contact" onClick={() => onContactMarkerClick()}>
						<RoomIcon
							style={{ color: "red", fontSize: 52 }}
							onMouseOver={() => onHover(true)}
							onMouseLeave={() => onHover(false)}
						/>
					</IconButton>
				</Html>
				<Html>
					<ContactForm isOpen={journeyStep.step === 6} onContactBackDropClick={onContactMarkerMiss} />
				</Html>
			</mesh>
		</group>
	);
}

export default ContactView;
