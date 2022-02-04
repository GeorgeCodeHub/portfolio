import React, { useRef, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import "./assets/3d-styles.scss";

function ExperienceView() {
	const overlay = useRef();
	return (
		<>
			<div className="stars"></div>
			<div className="twinkling"></div>

			<Canvas
				shadows
				onCreated={(state: any) => state.events.connect(overlay.current)}
				raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
			>
				<ambientLight intensity={1} />
				<Suspense fallback={null}>
					<Environment preset="night" />
				</Suspense>
			</Canvas>
		</>
	);
}

export default ExperienceView;
