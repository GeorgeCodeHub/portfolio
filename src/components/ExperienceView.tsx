import React, { useRef, Suspense } from "react";

import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { EffectComposer, SelectiveBloom, SSAO, SMAA } from "@react-three/postprocessing";

import Galaxy from "./assets/Galaxy";

const HoveringPlanets = React.forwardRef((props, ref: any) => {
	useFrame(({ clock }) => {
		const t = clock.getElapsedTime();
		const x = 2.6 * Math.sin(t * 0.05);
		const z = 2.6 * Math.cos(t * 0.05);
		ref.current.position.x = x;
		ref.current.position.z = z;
	});

	return (
		<mesh ref={ref} name="Clickable">
			<meshPhysicalMaterial envMapIntensity={0.4} clearcoat={0.8} clearcoatRoughness={0} roughness={1} metalness={0} />
			<Html className="experience-indicator" position={[0, 0, 0]} center>
				<div style={{ marginLeft: 75, marginBottom: -5, textDecoration: "underline" }}>Test</div>
				<b>(●)</b>
				<svg width="30" height="12" style={{ marginLeft: -5, marginBottom: 12 }}>
					<line x1="0" y1="12" x2="12" y2="2" stroke="white" strokeWidth="2" />
					<line x1="12" y1="2" x2="30" y2="2" stroke="white" strokeWidth="2" />
				</svg>
			</Html>
		</mesh>
	);
});

function ExperienceView() {
	const ambientLightRef = useRef();
	const pointLightRef = useRef();

	const planetRef = useRef<any>();

	return (
		<div className="view-container">
			<Canvas camera={{ position: [0, 5, 5], zoom: 1.5 }}>
				<Suspense fallback={null}>
					<ambientLight ref={ambientLightRef} />
					<pointLight ref={pointLightRef} position={[0, 0, 0]} />
					<Galaxy />

					<HoveringPlanets ref={planetRef} />
					{/* <Cloud
								position={[0, 0, 0]}
								opacity={0.8}
								speed={0.1} // Rotation speed
								width={15} // Width of the full cloud
								depth={0.5} // Z-dir depth
								segments={20} // Number of particles
							/>
							<Cloud
								position={[5, 5, -10]}
								rotation={[0.5, 0, 0]}
								opacity={0.5}
								speed={0.2} // Rotation speed
								width={25} // Width of the full cloud
								depth={0.5} // Z-dir depth
								segments={30} // Number of particles
							/>
							<Cloud
								position={[-5, 5, -10]}
								rotation={[-0.5, 0, 1]}
								opacity={0.5}
								speed={0.2} // Rotation speed
								width={25} // Width of the full cloud
								depth={0.5} // Z-dir depth
								segments={30} // Number of particles
							/>
							<Cloud
								position={[-5, 5, -10]}
								rotation={[0, 0.5, 1]}
								opacity={0.5}
								speed={0.2} // Rotation speed
								width={25} // Width of the full cloud
								depth={0.5} // Z-dir depth
								segments={30} // Number of particles
							/>
							<Cloud
								position={[-5, 5, -10]}
								rotation={[0, -0.5, 1]}
								opacity={0.5}
								speed={0.2} // Rotation speed
								width={25} // Width of the full cloud
								depth={0.5} // Z-dir depth
								segments={30} // Number of particles
							/> */}
					<EffectComposer multisampling={0.2}>
						<SelectiveBloom
							lights={[ambientLightRef, pointLightRef]} // ⚠️ REQUIRED! all relevant lights
							selection={[planetRef]} // selection of objects that will not have bloom effect
							intensity={0.5} // The bloom intensity.
							luminanceThreshold={0.2} // luminance threshold. Raise this value to mask out darker elements in the scene.
						/>
						<SSAO />
						<SMAA />
					</EffectComposer>
				</Suspense>

				<OrbitControls enablePan={true} enableZoom={true} />
			</Canvas>
		</div>
	);
}

export default ExperienceView;
