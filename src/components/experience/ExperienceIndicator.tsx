import React, { useState, useCallback, useRef } from "react";

import { format } from "date-fns";

import AllInclusiveIcon from "@mui/icons-material/AllInclusive";

import { useSprings, animated } from "react-spring";

import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import { ExperienceIndicatorTypes } from "../../utils/types";

import ExperienceIndicatorInfo from "./ExperienceIndicatorInfo";

import { datePatterns } from "../../utils/consts";

const ExperienceIndicator = React.forwardRef(
	({ radius, jobItem, follow, setFollow }: ExperienceIndicatorTypes, ref: any) => {
		const [isIndicatorSelected, setIsIndicatorSelected] = useState(false);

		const refIndicator: any = useRef();

		// Set initial spring settings for animation
		const [springs, setSprings] = useSprings(1, (i) => ({
			opacity: 0,
			transform: `translateY(40px) scale(0.1, 0.1)`,
			width: 0
		}));

		// Show hide info of the Job on hover
		const onHover = useCallback(
			(isHover: any) => {
				setSprings((i) => ({
					opacity: isHover ? 1 : 0,
					transform: isHover ? `translateY(0px) scale(1, 1)` : `translateY(40px) scale(0.1, 0.1)`,
					width: isHover ? "initial" : 0,
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
			const t = clock.getElapsedTime() * jobItem.speed + jobItem.offset;
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
						{springs.map((props, index) => (
							<animated.div key={index} className="exp-indicator-title" style={props}>
								<div>{jobItem.positionTitle}</div>
								<hr />
								<div style={{ fontSize: "1.2rem" }}>
									{format(new Date(jobItem.dateFrom), datePatterns.monthYear)} -{" "}
									{jobItem.dateTo ? (
										format(new Date(jobItem.dateTo), datePatterns.monthYear)
									) : (
										<AllInclusiveIcon style={{ marginBottom: -6 }} />
									)}
								</div>
							</animated.div>
						))}

						<div
							className="exp-indicator-pointer"
							style={{ WebkitTextStroke: "1px black" }}
							onMouseOver={() => onHover(true)}
							onMouseLeave={() => onHover(false)}
							onClick={() => onIndicatorClick()}
						>
							◻
						</div>
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
