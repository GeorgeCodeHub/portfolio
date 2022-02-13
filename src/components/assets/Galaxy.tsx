import React, { useRef, useState, useEffect } from "react";

import { useFrame } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import * as THREE from "three";

import StarImage from "../../images/star.png";

const starIcon = new THREE.TextureLoader().load(StarImage);

const Nucleus = ({ size }: { size: number }) => {
	const color = new THREE.Color();
	color.setHSL(Math.random(), 0.7, Math.random() * 0.2 + 0.05);

	return (
		<mesh position={[0, 0, 0]} scale={[size, size, size]}>
			<sphereBufferGeometry attach="geometry" args={[0.5, 32, 32, 0, 6.4, 0, 6.3]} />
			<meshPhysicalMaterial
				color="#fff"
				envMapIntensity={0.4}
				clearcoat={0.8}
				clearcoatRoughness={0}
				roughness={1}
				metalness={0}
			/>
		</mesh>
	);
};

function Galaxy() {
	const [movement] = useState(() => new THREE.Vector3());
	const [temp] = useState(() => new THREE.Vector3());
	const [focus] = useState(() => new THREE.Vector3());

	const dof = useRef<any>();
	const particles: any = useRef();

	const galaxyCount = 313500;
	const galaxySize = 0.005;
	const galaxyRadius = 7;
	const galaxyBranches = 4;
	const galaxySpin = 1.2;
	const galaxyRandomness = 0.34;
	const galaxyRandomnessPower = 2.75;
	const galaxyInsideColor = "#22761a";
	const galaxyOutsideColor = "#031061";

	const galaxyOpacity = 1.0;
	const galaxyFocusDistance = 0.05;
	const galaxyFocalLength = 0.02;
	const galaxyWidth = 480;
	const galaxyHeight = 480;
	const galaxyFocus = 0;

	useEffect(() => {
		generateGalaxy();
	}, []);

	useFrame((state, delta) => {
		dof.current.target = focus.lerp(particles.current.position, 0.05);
		movement.lerp(temp.set(state.mouse.x, state.mouse.y * 0.2, 0), 0.2);
		if (dof.current) {
			dof.current.circleOfConfusionMaterial.uniforms.focusDistance.value = galaxyFocusDistance;
			dof.current.circleOfConfusionMaterial.uniforms.focalLength.value = galaxyFocalLength;
			dof.current.resolution.width = galaxyWidth;
			dof.current.resolution.height = galaxyHeight;
			dof.current.target = new THREE.Vector3(galaxyFocus, galaxyFocus, galaxyFocus);
			dof.current.blendMode.opacity.value = galaxyOpacity;
		}

		// Animate rotation
		const elapsedTime = state.clock.getElapsedTime();
		particles.current.rotation.y = 0.05 * elapsedTime;
	});

	const generateGalaxy = () => {
		const positions = new Float32Array(galaxyCount * 3);
		const colors = new Float32Array(galaxyCount * 3);
		const colorInside = new THREE.Color(galaxyInsideColor);
		const colorOutside = new THREE.Color(galaxyOutsideColor);

		for (let i = 0; i < galaxyCount; i++) {
			const i3 = i * 3;

			const radius = Math.random() * galaxyRadius;
			const spinAngle = radius * galaxySpin;
			const branchAngle = ((i % galaxyBranches) / galaxyBranches) * Math.PI * 2;

			const randomX =
				Math.pow(Math.random(), galaxyRandomnessPower) * (Math.random() < 0.5 ? 1 : -1) * galaxyRandomness * radius;
			const randomY =
				Math.pow(Math.random(), galaxyRandomnessPower) * (Math.random() < 0.5 ? 1 : -1) * galaxyRandomness * radius;
			const randomZ =
				Math.pow(Math.random(), galaxyRandomnessPower) * (Math.random() < 0.5 ? 1 : -1) * galaxyRandomness * radius;

			positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
			positions[i3 + 1] = randomY;
			positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

			const mixedColor = colorInside.clone();
			mixedColor.lerp(colorOutside, radius / galaxyRadius);

			colors[i3] = mixedColor.r;
			colors[i3 + 1] = mixedColor.g;
			colors[i3 + 2] = mixedColor.b;
		}

		particles.current.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		particles.current.geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
	};

	return (
		<>
			<points ref={particles}>
				<bufferGeometry attach="geometry" />
				<pointsMaterial
					opacity={1}
					attach="material"
					map={starIcon}
					alphaMap={starIcon}
					transparent={true}
					size={galaxySize}
					premultipliedAlpha={true}
					sizeAttenuation={true}
					depthWrite={false}
					vertexColors={true}
					blending={THREE.AdditiveBlending}
				/>
			</points>
			<Nucleus size={0.12} />
			<EffectComposer multisampling={0.2}>
				<DepthOfField ref={dof} bokehScale={2} />
			</EffectComposer>
		</>
	);
}

export default Galaxy;
