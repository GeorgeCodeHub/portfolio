import React, { useState, Suspense } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Environment } from "@react-three/drei";
import * as THREE from "three";

import Planet from "./assets/Planet";

function Sphere(props: any) {
	return (
		<mesh {...props}>
			<sphereBufferGeometry args={[1, 64, 64]} />
			<meshPhysicalMaterial envMapIntensity={0.4} clearcoat={0.8} clearcoatRoughness={0} roughness={1} metalness={0} />
		</mesh>
	);
}

const HtmlItemPanel = ({ ...props }: any) => {
	const [htmlVisible, setHtmlVisible] = useState<boolean>();

	return (
		<Html
			distanceFactor={1.5}
			sprite
			transform
			occlude
			onOcclude={(visible: boolean) => {
				setHtmlVisible(visible);
				return null;
			}}
			// We just interpolate the visible state into css opacity and transforms
			style={{
				transition: "all 0.2s",
				opacity: htmlVisible ? 0 : 1,
				transform: `scale(${htmlVisible ? 0.1 : 1})`
			}}
			{...props}
		>
			<Card variant="outlined" style={{ maxWidth: 500 }}>
				<CardHeader
					style={{ textAlign: "left", borderBottom: "1px solid" }}
					title={
						<>
							<div style={{ float: "left" }}>TITLE</div> <div style={{ float: "right" }}>COMPANY</div>
						</>
					}
				/>
				<CardContent>
					<Typography variant="subtitle1" gutterBottom>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis magnam numquam dolor accusantium
						doloremque voluptatem quis cupiditate obcaecati omnis! Facilis enim error optio eum corrupti est itaque
						architecto inventore sint!
					</Typography>
				</CardContent>
				<CardActions style={{ background: "#EEEEEE" }}>Date</CardActions>
			</Card>
		</Html>
	);
};

function ExperienceView() {
	const count = 6;
	const temp = [];
	const spherical = new THREE.Spherical();
	const phiSpan = Math.PI / count;
	const thetaSpan = (Math.PI * 2) / count;
	for (let i = 1; i < count; i++)
		// Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
		temp.push({
			position: new THREE.Vector3().setFromSpherical(spherical.set(2, (phiSpan * count) / 1.8, thetaSpan * i))
		});

	console.log(temp);

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
					<Typography variant="h2">EXPERIENCE</Typography>
				</Grid>
				<Grid item xs={11} style={{ width: "100%" }}>
					<Canvas camera={{ position: [0, 0, 5], fov: 55 }}>
						<spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]} />
						<Suspense fallback={null}>
							<Sphere position={[0, 0, 0]} />
							{temp.map((item, index) => (
								<HtmlItemPanel key={index} position={item.position} />
							))}
							{/* <HtmlItemPanel position={[1.5, -0.4, 0]} />

							<HtmlItemPanel position={[-1.5, -0.4, -1.5]} /> */}
							<Environment preset="warehouse" />
						</Suspense>
						<OrbitControls makeDefault enableZoom={false} enablePan={false} />
					</Canvas>
				</Grid>
			</Grid>
		</div>
	);
}

export default ExperienceView;
