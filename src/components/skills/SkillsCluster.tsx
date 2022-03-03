import { useState, useEffect } from "react";

import { useFrame, Vector3 } from "@react-three/fiber";
import { Line, Html } from "@react-three/drei";

function SkillsCluster({ wordPosition, word }: { wordPosition: any; word: string | Vector3 }) {
	const [hovered, setHovered] = useState(false);

	const onPointerOver = (e: { stopPropagation: () => any }) => {
		return [e.stopPropagation(), setHovered(true)];
	};

	const onPointerOut = () => setHovered(false);

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
		// ref.current.quaternion.copy(camera.quaternion);
		// Animate font color
		// ref.current.material.color.lerp(color.set(hovered ? "#fa2720" : "white"), 0.1);
	});

	return (
		<>
			<Line
				points={[
					[wordPosition.x, wordPosition.y, wordPosition.z],
					[0, 0, 0]
				]}
				color="white"
				lineWidth={1}
				dashed={true}
				dashScale={10}
			/>
			<Html onPointerOver={onPointerOver} onPointerOut={onPointerOut} position={wordPosition} center>
				<b
					className="skill-item"
					style={{ color: hovered ? "#fa2720" : "white", font: process.env.PUBLIC_URL + "/fonts/Inter-Bold.woff" }}
				>
					{word}
				</b>
			</Html>
		</>
	);
}

export default SkillsCluster;
