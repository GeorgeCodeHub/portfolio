import React, { useState, useCallback, useRef } from "react";

import { useSprings, animated } from "react-spring";

import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import ProjectInfo from "./ProjectInfo";

function Satellite({
	id,
	selectedModel,
	speed,
	offset,
	xRadius,
	zRadius,
	itemData
}: {
	id: number;
	selectedModel: any;
	speed: number;
	offset: number;
	xRadius: number;
	zRadius: number;
	itemData: any;
}) {
	const [isOccluded, setIsOccluded] = useState<boolean>();
	const [open, setOpen] = useState(false);

	const satelliteRef: any = useRef();
	const modelRef: any = useRef();

	// Set initial spring settings for animation
	const [springs, setSprings] = useSprings(1, (i) => ({
		opacity: 0,
		transform: `translateY(40px) scale(0.8, 0.2)`
	}));

	// Show hide info of the Job on hover
	const onHover = useCallback(
		(isHover: any) => {
			setSprings((i) => ({
				textAlign: "center",
				opacity: isHover ? 1 : 0,
				transform: isHover ? `translateY(0px) scale(1, 1)` : `translateY(-40px) scale(0.2, 0.8)`,
				delay: isHover ? i * 100 : i * 100
			}));
		},
		[setSprings]
	);

	const onTitleOcclude = useCallback((value: boolean) => {
		setIsOccluded(value);
		return null;
	}, []);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, []);

	const handleClickOpen = useCallback(() => {
		setOpen(true);
	}, []);

	useFrame(({ clock }) => {
		const t = clock.getElapsedTime() * speed + offset;

		const x = xRadius * Math.sin(t);
		const y = id * Math.sin(t);
		const z = zRadius * Math.cos(t);

		// Rotate satellite around earth
		satelliteRef.current.position.x = x;
		if (id % 2 === 0) satelliteRef.current.position.y = y;
		else satelliteRef.current.position.y = -y;
		satelliteRef.current.position.z = z;

		// Rotate satellite around itself
		modelRef.current.rotation.x = modelRef.current.rotation.y = modelRef.current.rotation.z = Math.cos(t) * Math.PI;
	});

	return (
		<group ref={satelliteRef}>
			{React.createElement(selectedModel, {
				onPointerOver: (e: { stopPropagation: () => any }) => [e.stopPropagation(), onHover(true)],
				onPointerOut: () => onHover(false),
				onClick: () => handleClickOpen(),
				position: [0, 0, 0],
				scale: 0.05,
				ref: modelRef
			})}
			<mesh
				onPointerOver={(e) => [e.stopPropagation(), onHover(true)]}
				onPointerOut={(e) => onHover(false)}
				onClick={() => handleClickOpen()}
			>
				<Html
					className="project-indicator-container"
					scale={1}
					position={[0, 0.4, 0]}
					center
					occlude
					onOcclude={onTitleOcclude}
					// We interpolate the visible state into css opacity and transforms
					style={{ transition: "all 0.2s", opacity: isOccluded ? 0 : 1 }}
				>
					<div
						className="project-indicator-title project-indicator-pointer"
						onMouseOver={() => onHover(true)}
						onMouseLeave={() => onHover(false)}
						onClick={() => handleClickOpen()}
					>
						{itemData.title}
					</div>
				</Html>
				<Html
					className="project-indicator-container"
					scale={1}
					position={[0, -1.4, 0]}
					center
					occlude
					onOcclude={onTitleOcclude}
					// We interpolate the visible state into css opacity and transforms
					style={{ transition: "all 0.2s", opacity: isOccluded ? 0 : 1 }}
				>
					<div className="project-indicator-title project-indicator-technologies">
						{springs.map((props, index) => (
							<animated.div key={index} style={props}>
								{itemData.technologies.join(", ")}
							</animated.div>
						))}
					</div>
				</Html>
				<Html scale={1} position={[0, 0, 0]} center>
					<ProjectInfo handleClose={handleClose} open={open} itemData={itemData} />
				</Html>
			</mesh>
		</group>
	);
}

export default Satellite;
