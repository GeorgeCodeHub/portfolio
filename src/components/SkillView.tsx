import { useMemo, Suspense } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Bounds, OrbitControls, Environment, useBounds } from "@react-three/drei";

import { getRandomArbitrary } from "../utils/mathUtils";

import Planet from "./assets/Planet";
import Word from "./assets/Word";

// This component wraps children in a group with a click handler
// Clicking any object will refresh and fit bounds
function SelectToZoom({ children }: any) {
	const api = useBounds();

	return (
		<group
			onClick={(e) => {
				if (e.object.name) return [e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()];
			}}
		>
			{children}
		</group>
	);
}

const PlanetCluster = ({
	clusterItems,
	position
}: {
	clusterItems: string[];
	position: { x: number; y: number; z: number };
}) => {
	const radius = 15;

	// Create a count x count random words with spherical distribution
	const words = useMemo(() => {
		const temp = [];
		const spherical = new THREE.Spherical();
		const phiSpan = Math.PI / clusterItems.length;
		const thetaSpan = (Math.PI * 2) / clusterItems.length;
		for (let i = 0; i < clusterItems.length; i++)
			// Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
			temp.push({
				position: new THREE.Vector3().setFromSpherical(
					spherical.set(radius, phiSpan * i + getRandomArbitrary(-1, 1), thetaSpan * i + getRandomArbitrary(-1, 1))
				),
				word: clusterItems[i]
			});
		return temp;
	}, [clusterItems, radius]);

	return (
		<>
			<Planet position={position} />
			{words.map((item, index) => {
				// Edit position of each word in accordance to the position of the planet
				item.position.x = item.position.x + position.x;
				item.position.y = item.position.y + position.y;
				item.position.z = item.position.z + position.z;
				return <Word key={index} position={position} wordPosition={item.position} word={item.word} />;
			})}
		</>
	);
};

function SkillView() {
	const frontEndSkills = ["HTML", "CSS", "Javascript", "Typescript", "React", "NextJS", "Redux"];

	return (
		<div className="view-container">
			<Grid
				container
				direction="column"
				justifyContent="space-around"
				alignItems="center"
				style={{ width: "100%", height: "100%" }}
			>
				<Grid item xs={1} style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
					<Typography variant="h2">SKILLS</Typography>
				</Grid>
				<Grid item xs={11} style={{ width: "100%" }}>
					<Canvas camera={{ position: [-85, 0, 0] }}>
						<fog attach="fog" args={["#202025", 0, 80]} />
						<spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
						<Suspense fallback={null}>
							<Bounds clip margin={2.2}>
								<SelectToZoom>
									<PlanetCluster clusterItems={frontEndSkills} position={{ x: -45, y: 0, z: 0 }} />
									<PlanetCluster clusterItems={frontEndSkills} position={{ x: 0, y: -25, z: -60 }} />
									<PlanetCluster clusterItems={frontEndSkills} position={{ x: 45, y: 45, z: 60 }} />
									<Environment preset="warehouse" />
								</SelectToZoom>
							</Bounds>
						</Suspense>
						<OrbitControls makeDefault enableZoom={false} enablePan={false} />
					</Canvas>
				</Grid>
			</Grid>
		</div>
	);
}

export default SkillView;
