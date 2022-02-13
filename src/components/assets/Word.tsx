import { useRef, useState, useEffect } from "react";

import * as THREE from "three";
import { useFrame, Vector3 } from "@react-three/fiber";
import { Text, Line } from "@react-three/drei";

function Word({
	position,
	wordPosition,
	word
}: {
	position: { x: number; y: number; z: number };
	wordPosition: any;
	word: string | Vector3;
}) {
	const color = new THREE.Color();
	const fontProps = {
		font: process.env.PUBLIC_URL + "/fonts/Inter-Bold.woff",
		fontSize: 2.5,
		letterSpacing: -0.05,
		lineHeight: 1,
		"material-toneMapped": false
	};
	const ref = useRef<any>();
	const [hovered, setHovered] = useState(false);
	const over = (e: { stopPropagation: () => any }) => {
		return [e.stopPropagation(), setHovered(true)];
	};
	const out = () => setHovered(false);

	// Change the mouse cursor on hover
	useEffect(() => {
		if (hovered) document.body.style.cursor = "pointer";
		return () => {
			document.body.style.cursor = "auto";
		};
	}, [hovered]);

	// Tie component to the render-loop
	useFrame(({ camera }) => {
		// Make text face the camera
		ref.current.quaternion.copy(camera.quaternion);
		// Animate font color
		ref.current.material.color.lerp(color.set(hovered ? "#fa2720" : "white"), 0.1);
	});

	return (
		<>
			<Line
				points={[
					[wordPosition.x, wordPosition.y, wordPosition.z],
					[position.x, position.y, position.z]
				]}
				color="white"
				lineWidth={2}
				dashed={true}
			/>
			<Text ref={ref} onPointerOver={over} onPointerOut={out} position={wordPosition} {...fontProps} children={word} />
		</>
	);
}

export default Word;
