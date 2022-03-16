import React, { useState, useCallback, useRef, useEffect } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

import { JourneyStepsContext } from "../../App";

import { useSprings, animated } from "react-spring";

import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { EffectComposer, Bloom, SSAO, SMAA } from "@react-three/postprocessing";
import * as THREE from "three";

import Galaxy from "./Galaxy";

import ExperienceIndicator from "./ExperienceIndicator";

import { SpaceBase } from "../../utils/3DModelsSpaceBase";

import { jobsList } from "../../utils/dataSet";

import "./Experience.scss";

function ExperienceView({
	setChangedView
}: {
	setChangedView: React.Dispatch<
		React.SetStateAction<{
			duration: number;
			isChanged: boolean;
		}>
	>;
}) {
	const isScreenMobile = useMediaQuery("(max-width:600px)");

	const selectedItemRef: any = useRef();

	const spaceStationRef = useRef<any>();

	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	const [follow, setFollow] = useState(false);

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

	const onSpaceStationClick = () => {
		selectedItemRef.current = spaceStationRef.current;
		setFollow(true);
		// Set animation for transition from one view to another
		setChangedView({ duration: 2000, isChanged: true });
	};

	// Update position of space station and camera to rotate around the galaxy
	useFrame(({ camera, clock }) => {
		const t = clock.getElapsedTime() * 0.06;
		const x = 3.2 * Math.sin(t);
		const z = 3.2 * Math.cos(t);
		spaceStationRef.current.position.x = x;
		spaceStationRef.current.position.z = z;

		// Set camera in accordance to the selected item
		if (follow) {
			let newCameraPosition = new THREE.Vector3(
				selectedItemRef.current.position.x * 1.5,
				0.2,
				selectedItemRef.current.position.z * 1.5
			);

			if (selectedItemRef?.current?.name === "space-station") {
				// Change position of camera to look more natural when zooming to space station
				newCameraPosition = new THREE.Vector3(
					selectedItemRef.current.position.x,
					selectedItemRef.current.position.y,
					selectedItemRef.current.position.z
				);

				if (camera.position.y <= 0.1) {
					// This is a hacky way of updating the state of the item. If setTimeout is removed the UI breaks and keeps both views on the scene
					setTimeout(() => {
						dispatchJourneyStep({ type: "Education", payload: isScreenMobile });
					}, 0);
				}

				camera.position.lerp(newCameraPosition, 0.02);
			} else {
				camera.position.lerp(newCameraPosition, 0.04);
			}

			camera.lookAt(selectedItemRef.current.position);
		} else {
			camera.position.lerp(journeyStep.cameraPosition, 0.02);
			camera.lookAt(new THREE.Vector3(0, 0, 0));
		}
		camera.updateProjectionMatrix();
	});

	useEffect(() => {
		setChangedView({ duration: 2000, isChanged: false });
	}, [setChangedView]);

	return (
		<>
			<ambientLight />
			<pointLight position={[0, 0, 0]} />
			<Galaxy />
			<group
				onPointerMissed={(e) => {
					setFollow(false);
				}}
			>
				{jobsList.map((item, index) => (
					<ExperienceIndicator
						key={index}
						ref={selectedItemRef}
						radius={index + 1}
						jobItem={item}
						follow={follow}
						setFollow={setFollow}
					/>
				))}

				{/* Space station indicator */}
				<SpaceBase
					ref={spaceStationRef}
					name="space-station"
					position={[5, 0, 0]}
					rotation={[Math.PI / 2, 0, Math.PI / 6]}
					scale={0.01}
				>
					{!follow && (
						<Html className="exp-indicator-container" position={[0, 0, 0]} center>
							<div className="exp-indicator-title">
								{springs.map((props, index) => (
									<animated.div key={index} style={props}>
										<div>EDUCATION</div>
										<hr />
										<div style={{ fontSize: "1rem" }}>12/9/2011 - present</div>
									</animated.div>
								))}
							</div>

							<div
								className="exp-indicator-pointer"
								style={{ transform: "scaleX(1.5)" }}
								onMouseOver={() => onHover(true)}
								onMouseLeave={() => onHover(false)}
								onClick={() => onSpaceStationClick()}
							>
								[]
							</div>
						</Html>
					)}
				</SpaceBase>
			</group>
			{/* Effects */}
			<EffectComposer multisampling={0.2}>
				<Bloom
					intensity={0.5} // The bloom intensity.
					luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
				/>
				<SSAO />
				<SMAA />
			</EffectComposer>
		</>
	);
}

export default ExperienceView;