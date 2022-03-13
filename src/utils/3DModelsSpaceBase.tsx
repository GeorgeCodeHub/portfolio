import React from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload(process.env.PUBLIC_URL + "/models/SpaceBase.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/SpaceShip1.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/SpaceShip2.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/SpaceShip3.glb");

export const SpaceBase = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/SpaceBase.glb");

	return (
		<group ref={ref} {...props} dispose={null}>
			<group scale={[1, 1.56, 1]}>
				{props.children}
				<mesh geometry={nodes.Cylinder002.geometry} material={materials.SpaceBaseWhite} />
				<mesh geometry={nodes.Cylinder002_1.geometry} material={materials.SpacebaseBlue} />
				<mesh geometry={nodes.Cylinder002_2.geometry} material={materials.SpaceBaseBlack} />
				<mesh geometry={nodes.Cylinder002_3.geometry} material={materials.SpaceBaseOrange} />
				<mesh geometry={nodes.Cylinder002_4.geometry} material={materials.SpaceBaseGreen} />
				<mesh geometry={nodes.Cylinder002_5.geometry} material={materials.SatelliteGreyDark} />
				<mesh geometry={nodes.Cylinder002_6.geometry} material={materials.SatelliteGreyLight} />
				<mesh geometry={nodes.Cylinder002_7.geometry} material={materials.SpaceBaseGlowBlue} />
			</group>
		</group>
	);
});

export const SpaceShip1 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/SpaceShip1.glb");

	return (
		<group ref={ref} {...props} dispose={null}>
			<group position={[-5.04, 0, 0]}>
				<mesh geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material} />
				<mesh geometry={nodes.Cylinder004_1.geometry} material={nodes.Cylinder004_1.material} />
			</group>
			<group position={[-2.37, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.74}>
				<mesh geometry={nodes.Cylinder007.geometry} material={nodes.Cylinder007.material} />
				<mesh geometry={nodes.Cylinder007_1.geometry} material={nodes.Cylinder007_1.material} />
			</group>
			<group position={[-5.08, -0.05, 0]}>
				<mesh geometry={nodes.Cylinder006.geometry} material={nodes.Cylinder006.material} />
				<mesh geometry={nodes.Cylinder006_1.geometry} material={nodes.Cylinder006_1.material} />
			</group>
			<group position={[-5.04, -0.05, 0]}>
				<mesh geometry={nodes.Cylinder005.geometry} material={nodes.Cylinder005.material} />
				<mesh geometry={nodes.Cylinder005_1.geometry} material={nodes.Cylinder005_1.material} />
			</group>
			<mesh geometry={nodes.Cube002.geometry} material={materials.SpaceBaseWhite} />
			<mesh geometry={nodes.Cube002_1.geometry} material={materials.Red} />
			<mesh geometry={nodes.Cube002_2.geometry} material={materials.Grey} />
			<mesh geometry={nodes.Cube002_3.geometry} material={materials.SatelliteBlack} />
			<mesh geometry={nodes.Cube002_4.geometry} material={materials.SatelliteGreyLight} />
		</group>
	);
});

export const SpaceShip2 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/SpaceShip2.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<mesh geometry={nodes.Cube003.geometry} material={materials.SpaceBaseWhite} />
			<mesh geometry={nodes.Cube003_1.geometry} material={materials.SpaceBaseGreen} />
			<mesh geometry={nodes.Cube003_2.geometry} material={materials.SatelliteBlack} />
			<mesh geometry={nodes.Cube003_3.geometry} material={materials.Grey} />
			<mesh geometry={nodes.Cube003_4.geometry} material={materials.SatelliteGreyLight} />
			<group rotation={[0, 0, -Math.PI / 2]}>
				<mesh geometry={nodes.Cylinder010.geometry} material={nodes.Cylinder010.material} />
				<mesh geometry={nodes.Cylinder010_1.geometry} material={nodes.Cylinder010_1.material} />
			</group>
			<group position={[-0.58, -0.14, 0]} rotation={[0, 0, -Math.PI / 2]} scale={0.52}>
				<mesh geometry={nodes.Cylinder012.geometry} material={nodes.Cylinder012.material} />
				<mesh geometry={nodes.Cylinder012_1.geometry} material={nodes.Cylinder012_1.material} />
			</group>
			<mesh
				geometry={nodes["Spaceship2-ExhastEnd"].geometry}
				material={nodes["Spaceship2-ExhastEnd"].material}
				rotation={[0, 0, -Math.PI / 2]}
			/>
		</group>
	);
});

export const SpaceShip3 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/SpaceShip3.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<mesh geometry={nodes.Cube004.geometry} material={materials["SatelliteBase.001"]} />
			<mesh geometry={nodes.Cube004_1.geometry} material={materials.SatelliteWindowBlack} />
			<mesh geometry={nodes.Cube004_2.geometry} material={nodes.Cube004_2.material} />
			<mesh geometry={nodes.Cube004_3.geometry} material={nodes.Cube004_3.material} />
			<mesh geometry={nodes.Cube004_4.geometry} material={materials.SpaceshipDark} />
			<mesh geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} />
			<mesh geometry={nodes.Cube005_1.geometry} material={materials.SpaceBaseGlowBlue} />
			<mesh geometry={nodes.Cube005_2.geometry} material={nodes.Cube005_2.material} />
		</group>
	);
});
