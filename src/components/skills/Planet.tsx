import React, { useState, useEffect, forwardRef, useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

import { getRandomArbitrary } from "../../utils/mathUtils";
import { planetsArray } from "../../utils/3DModelsPlanets";

import Ellipsis from "./Ellipsis";
import SkillsCluster from "./SkillsCluster";

import "../experience/Experience.scss";

const Planet = forwardRef(({ technicalSkillItem, follow, setFollow }: any, ref: any) => {
	const [isSelected, setIsSelected] = useState(false);

	const planetRef: any = useRef();

	// Create a count x count random words with spherical distribution
	const skillWords = useMemo(() => {
		const temp = [];
		const spherical = new THREE.Spherical();
		const phiSpan = Math.PI / technicalSkillItem.techItems.length;
		const thetaSpan = (Math.PI * 2) / technicalSkillItem.techItems.length;
		for (let i = 0; i < technicalSkillItem.techItems.length; i++)
			// Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
			temp.push({
				position: new THREE.Vector3().setFromSpherical(
					spherical.set(10, phiSpan * i + getRandomArbitrary(0, 1), thetaSpan * i + getRandomArbitrary(0, 1))
				),
				word: technicalSkillItem.techItems[i]
			});
		return temp;
	}, [technicalSkillItem.techItems]);

	// Set camera position on click
	const onIndicatorClick = () => {
		if (!follow) {
			ref.current = planetRef.current;
			setFollow(true);
			setIsSelected(true);
		} else {
			setFollow(false);
			setIsSelected(false);
		}
	};

	useFrame(({ clock }) => {
		const t = clock.getElapsedTime() * technicalSkillItem.speed + technicalSkillItem.offset;
		const x = technicalSkillItem.xRadius * Math.sin(t);
		const z = technicalSkillItem.zRadius * Math.cos(t);

		// Set planets to rotate around the sun
		planetRef.current.position.x = x;
		planetRef.current.position.z = z;
		planetRef.current.rotation.y += technicalSkillItem.rotationSpeed;
	});

	useEffect(() => {
		if (!follow) setIsSelected(false);
	}, [follow]);

	const rendered3dModel = useMemo(() => planetsArray[Math.floor(Math.random() * planetsArray.length)], []);

	return (
		<>
			{React.createElement(rendered3dModel, {
				position: [0, 0, 0],
				scale: technicalSkillItem.size,
				ref: planetRef,
				userData: technicalSkillItem,
				children: (
					<>
						<Html className="skill-type-title" position={[0, 0, 0]} center>
							<b
								className="exp-indicator-pointer"
								onClick={() => onIndicatorClick()}
								style={{ fontSize: follow ? "3rem" : "1.1rem", transition: "transform 0.3s ease-out" }}
							>
								{technicalSkillItem.title}
							</b>
						</Html>

						{isSelected &&
							skillWords.map((item, index) => {
								return <SkillsCluster key={index} wordPosition={item.position} word={item.word} />;
							})}
					</>
				)
			})}
			<Ellipsis xRadius={technicalSkillItem.xRadius} zRadius={technicalSkillItem.zRadius} />
		</>
	);
});

export default Planet;
