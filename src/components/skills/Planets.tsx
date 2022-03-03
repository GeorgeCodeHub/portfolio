import { useState, useEffect, forwardRef, useMemo, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

import { getRandomArbitrary } from "../../utils/mathUtils";

import Ellipsis from "./Ellipsis";
import SkillsCluster from "./SkillsCluster";

import "../experience/Experience.scss";

const random = (a: number, b: number) => a + Math.random() * b;
const randomInt = (a: number, b: number) => Math.floor(random(a, b));
const randomColor = () => `rgb(${randomInt(80, 50)}, ${randomInt(80, 50)}, ${randomInt(80, 50)})`;

let technicalSkillsData: any[] = [
	{
		title: "Front-End",
		techItems: ["HTML", "CSS", "Javascript", "Typescript", "React", "NextJS", "Redux"]
	},
	{
		title: "Back-End",
		techItems: ["PostgreSQL", "Javascript", "NodeJS", "ExpressJS", "Python", "FastAPI", "Django"]
	},
	{
		title: "Machine Learning",
		techItems: ["Python", "Numpy", "Pandas", "Scikit-learn", "Matplotlib", "OpenCV", "Keras", "Tensorflow"]
	},
	{
		title: "Game Dev",
		techItems: ["C#", "Unity3D", "Blender3D"]
	}
];

technicalSkillsData = technicalSkillsData.map((item, index) => ({
	...item,
	id: index,
	color: randomColor(),
	xRadius: (index + 2) * 4,
	zRadius: (index + 2) * 4,
	size: random(0.5, 1),
	speed: random(0.05, 0.1),
	offset: random(0, Math.PI * 4),
	rotationSpeed: random(0.008, 0.004)
}));

export default technicalSkillsData;

export const Planet = forwardRef(({ technicalSkillItem, follow, setFollow }: any, ref: any) => {
	const [isSelected, setIsSelected] = useState(false);

	const planetRef: any = useRef();

	const radius = 2;

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
					spherical.set(radius, phiSpan * i + getRandomArbitrary(0, 1), thetaSpan * i + getRandomArbitrary(0, 1))
				),
				word: technicalSkillItem.techItems[i]
			});
		return temp;
	}, [radius, technicalSkillItem.techItems]);

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

	return (
		<>
			<mesh ref={planetRef} userData={technicalSkillItem}>
				<sphereGeometry args={[technicalSkillItem.size, 32, 32]} />
				<meshStandardMaterial color={technicalSkillItem.color} />

				<Html className="skill-type-title" position={[0, 0, 0]} center>
					<b
						className="exp-indicator-pointer"
						onClick={() => onIndicatorClick()}
						style={{ fontSize: follow ? "3rem" : "1rem", transition: "transform 0.3s ease-out" }}
					>
						{technicalSkillItem.title}
					</b>
				</Html>

				{isSelected &&
					skillWords.map((item, index) => {
						return <SkillsCluster key={index} wordPosition={item.position} word={item.word} />;
					})}
			</mesh>
			<Ellipsis xRadius={technicalSkillItem.xRadius} zRadius={technicalSkillItem.zRadius} />
		</>
	);
});
