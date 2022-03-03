import React, { useState, useCallback, useRef } from "react";

import { useSprings, animated } from "react-spring";

import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import { ExperienceIndicatorTypes } from "../../utils/types";

import ExperienceIndicatorInfo from "./ExperienceIndicatorInfo";

const ExperienceIndicator = React.forwardRef(
	({ radius, jobItem, follow, setFollow }: ExperienceIndicatorTypes, ref: any) => {
		const [isIndicatorSelected, setIsIndicatorSelected] = useState(false);

		const refIndicator: any = useRef();

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

		// Set camera position on click
		const onIndicatorClick = () => {
			ref.current = refIndicator.current;

			setFollow(true);
			onHover(false);

			setTimeout(() => {
				setIsIndicatorSelected(true);
			}, 1900);
		};

		// On x click or back drop click close popup
		const onCloseInfo = () => {
			setFollow(false);
			setIsIndicatorSelected(false);
		};

		// Update position of each job to rotate around the galaxy
		useFrame(({ clock }) => {
			const t = clock.getElapsedTime() * jobItem.speed;
			const x = radius * Math.sin(t);
			const z = radius * Math.cos(t);
			refIndicator.current.position.x = x;
			refIndicator.current.position.z = z;
		});

		return (
			<mesh ref={refIndicator} position={[5 * Math.random(), 0, 5 * Math.random()]}>
				<sphereBufferGeometry args={[0.01, 32, 32]} />
				<meshPhysicalMaterial
					envMapIntensity={0.4}
					clearcoat={0.8}
					clearcoatRoughness={0}
					roughness={1}
					metalness={0}
				/>
				{!follow && (
					<Html className="exp-indicator-container" center>
						<div className="exp-indicator-title">
							{springs.map((props, index) => (
								<animated.div key={index} style={props}>
									<div>{jobItem.title}</div>
									<hr />
									<div style={{ fontSize: "1rem" }}>
										{jobItem.dateFrom} - {jobItem.dateTo}
									</div>
								</animated.div>
							))}
						</div>
						<b
							className="exp-indicator-pointer"
							onMouseOver={() => onHover(true)}
							onMouseLeave={() => onHover(false)}
							onClick={() => onIndicatorClick()}
						>
							( )
						</b>
						{/* <b className="exp-indicator-pointer">(●)</b> */}
					</Html>
				)}

				<Html>
					<ExperienceIndicatorInfo
						isIndicatorSelected={isIndicatorSelected}
						onCloseInfo={onCloseInfo}
						jobItem={jobItem}
					/>
				</Html>
			</mesh>
		);
	}
);

export default ExperienceIndicator;
