import React, { useRef, Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, Stars } from "@react-three/drei";
import Model from "./3d/Model";
import Overlay from "./3d/Overlay";

import "./3d/3d-styles.scss";

function ExperienceView() {
	const overlay = useRef();
	const caption = useRef();
	const scroll = useRef(0);
	return (
		<>
			<div className="stars"></div>
			<div className="twinkling"></div>

			<Canvas
				shadows
				onCreated={(state: any) => state.events.connect(overlay.current)}
				raycaster={{ computeOffsets: ({ clientX, clientY }) => ({ offsetX: clientX, offsetY: clientY }) }}
				style={{ height: "100vh" }}
			>
				<ambientLight intensity={1} />
				<Suspense fallback={null}>
					<Model scroll={scroll} />
					<Environment preset="night" />
				</Suspense>
			</Canvas>
			<Overlay ref={overlay} caption={caption} scroll={scroll} />
		</>
	);
}

export default ExperienceView;
