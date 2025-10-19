import { useGLTF } from "@react-three/drei";
import React from "react";
import { publicPath } from "./publicPath";

useGLTF.preload(publicPath("/models/Earth.glb"));
useGLTF.preload(publicPath("/models/Moon.glb"));
useGLTF.preload(publicPath("/models/Planet1.glb"));
useGLTF.preload(publicPath("/models/Planet2.glb"));
useGLTF.preload(publicPath("/models/Planet3.glb"));
useGLTF.preload(publicPath("/models/Planet4.glb"));
useGLTF.preload(publicPath("/models/Planet5.glb"));
useGLTF.preload(publicPath("/models/Planet6.glb"));
useGLTF.preload(publicPath("/models/Planet7.glb"));
useGLTF.preload(publicPath("/models/Planet8.glb"));
useGLTF.preload(publicPath("/models/Planet9.glb"));
useGLTF.preload(publicPath("/models/Planet10.glb"));
useGLTF.preload(publicPath("/models/Planet11.glb"));
useGLTF.preload(publicPath("/models/Planet12.glb"));
useGLTF.preload(publicPath("/models/Planet13.glb"));
useGLTF.preload(publicPath("/models/Planet14.glb"));
useGLTF.preload(publicPath("/models/Planet15.glb"));
useGLTF.preload(publicPath("/models/Planet16.glb"));
useGLTF.preload(publicPath("/models/Planet17.glb"));
useGLTF.preload(publicPath("/models/Sun1.glb"));
useGLTF.preload(publicPath("/models/Sun2.glb"));

export const Earth = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Earth.glb"));

	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<group rotation={[1.57, 0, 0.63]}>
				<mesh geometry={nodes.Icosphere018.geometry} material={materials.Land} />
				<mesh geometry={nodes.Icosphere018_1.geometry} material={materials.Sea} />
				<mesh geometry={nodes.Icosphere018_2.geometry} material={materials.Ice} />
			</group>
		</group>
	);
});

export const Moon = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Moon.glb"));

	return (
		<group ref={ref} {...props} dispose={null}>
			<group rotation={[1.57, 0, 0]}>
				<mesh geometry={nodes.Icosphere020.geometry} material={materials.GreyBase} />
				<mesh geometry={nodes.Icosphere020_1.geometry} material={materials.BlackBase} />
				<mesh geometry={nodes.Icosphere020_2.geometry} material={materials.WhiteBase} />
			</group>
		</group>
	);
});

export const Planet1 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet1.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Planet1.geometry} material={materials["Land.001"]} />
		</group>
	);
});

export const Planet2 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet2.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere002.geometry} material={materials.Red} />
			<mesh geometry={nodes.Icosphere002_1.geometry} material={materials.Yellow} />
			<mesh geometry={nodes.Icosphere002_2.geometry} material={materials.Purple} />
			<mesh geometry={nodes.Icosphere002_3.geometry} material={materials.RedLight} />
			<mesh geometry={nodes.Icosphere002_4.geometry} material={materials.RedDarker} />
			<mesh geometry={nodes.Icosphere002_5.geometry} material={materials.White} />
		</group>
	);
});

export const Planet3 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet3.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere003.geometry} material={materials.Grey} />
			<mesh geometry={nodes.Icosphere003_1.geometry} material={materials["Black.001"]} />
			<mesh geometry={nodes.Icosphere003_2.geometry} material={materials["White.001"]} />
		</group>
	);
});

export const Planet4 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet4.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<group position={[-0.17, -0.38, -0.07]} rotation={[0.79, -0.06, -0.13]}>
				<mesh geometry={nodes.Icosphere004.geometry} material={materials["Black.004"]} />
				<mesh geometry={nodes.Icosphere004_1.geometry} material={materials["Fire Red"]} />
				<mesh geometry={nodes.Icosphere004_2.geometry} material={materials["Fire Orange"]} />
			</group>
			<group position={[0.04, -0.11, 0.22]} rotation={[0.79, -0.06, -0.13]}>
				<mesh geometry={nodes.Icosphere005.geometry} material={materials["Black.002"]} />
				<mesh geometry={nodes.Icosphere005_1.geometry} material={materials["Fire Red.002"]} />
				<mesh geometry={nodes.Icosphere005_2.geometry} material={materials["Fire Orange.002"]} />
			</group>
			<group position={[-0.17, -0.38, -0.07]} rotation={[0.79, -0.06, -0.13]}>
				<mesh geometry={nodes.Icosphere006.geometry} material={materials.Blacks} />
				<mesh geometry={nodes.Icosphere006_1.geometry} material={materials["Fire Red.001"]} />
			</group>
		</group>
	);
});

export const Planet5 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet5.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere008.geometry} material={materials.Water} />
			<mesh geometry={nodes.Icosphere008_1.geometry} material={materials.Upperland} />
		</group>
	);
});

export const Planet6 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet6.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere009.geometry} material={materials["Water.001"]} />
			<mesh geometry={nodes.Icosphere009_1.geometry} material={materials["Lands.001"]} />
			<mesh geometry={nodes.Icosphere009_2.geometry} material={materials["Upperland.001"]} />
		</group>
	);
});

export const Planet7 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet7.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere010.geometry} material={materials.blue} />
			<mesh geometry={nodes.Icosphere010_1.geometry} material={materials["Blue Light"]} />
			<mesh geometry={nodes.Icosphere010_2.geometry} material={materials["Blue Lighter"]} />
			<mesh geometry={nodes.Icosphere010_3.geometry} material={materials["Blue Lighterrr"]} />
		</group>
	);
});

export const Planet8 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet8.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere011.geometry} material={materials["Material.001"]} />
			<mesh geometry={nodes.Icosphere011_1.geometry} material={materials["Material.003"]} />
			<mesh geometry={nodes.Icosphere011_2.geometry} material={materials["Material.004"]} />
			<mesh geometry={nodes.Icosphere011_3.geometry} material={materials["Material.005"]} />
		</group>
	);
});

export const Planet9 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet9.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere014.geometry} material={materials["Ice.001"]} />
			<mesh geometry={nodes.Icosphere014_1.geometry} material={materials.Blue} />
		</group>
	);
});

export const Planet10 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet10.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere015.geometry} material={materials.IceWhite} />
			<mesh geometry={nodes.Icosphere015_1.geometry} material={materials.WaterMaterial} />
		</group>
	);
});

export const Planet11 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet11.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere016.geometry} material={materials.Black} />
			<mesh geometry={nodes.Icosphere016_1.geometry} material={materials.Orange} />
		</group>
	);
});

export const Planet12 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet12.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere017.geometry} material={materials["Purple.002"]} />
			<mesh geometry={nodes.Icosphere017_1.geometry} material={materials.Tirquaz} />
		</group>
	);
});

export const Planet13 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet13.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<group position={[-0.78, 1.37, 0.13]} rotation={[-2.98, 0.4, -2.07]}>
				<mesh geometry={nodes.Icosphere005.geometry} material={materials["Black.002"]} />
				<mesh geometry={nodes.Icosphere005_1.geometry} material={materials["Fire Red.002"]} />
				<mesh geometry={nodes.Icosphere005_2.geometry} material={materials["Fire Orange.002"]} />
			</group>
			<group position={[-1.05, 1.06, -0.03]} rotation={[-2.98, 0.4, -2.07]}>
				<mesh geometry={nodes.Icosphere007.geometry} material={materials["Black.003"]} />
				<mesh geometry={nodes.Icosphere007_1.geometry} material={materials["Fire Red.003"]} />
				<mesh geometry={nodes.Icosphere007_2.geometry} material={materials["Fire Orange.003"]} />
			</group>
		</group>
	);
});

export const Planet14 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet14.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<group position={[-0.78, 1.37, 0.13]} rotation={[2.73, -0.11, 0.13]}>
				<mesh geometry={nodes.Icosphere005.geometry} material={materials["Black.002"]} />
				<mesh geometry={nodes.Icosphere005_1.geometry} material={materials["Fire Red.002"]} />
				<mesh geometry={nodes.Icosphere005_2.geometry} material={materials["Fire Orange.002"]} />
			</group>
		</group>
	);
});

export const Planet15 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet15.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<group position={[-0.73, 1.31, -0.03]} rotation={[2.95, -0.38, 0.99]}>
				<mesh geometry={nodes.Icosphere004.geometry} material={materials["Black.004"]} />
				<mesh geometry={nodes.Icosphere004_1.geometry} material={materials["Fire Red"]} />
				<mesh geometry={nodes.Icosphere004_2.geometry} material={materials["Fire Orange"]} />
			</group>
			<group position={[-1.1, 1.12, 0.13]} rotation={[2.98, -0.4, 1.07]}>
				<mesh geometry={nodes.Icosphere005.geometry} material={materials["Black.002"]} />
				<mesh geometry={nodes.Icosphere005_1.geometry} material={materials["Fire Red.002"]} />
				<mesh geometry={nodes.Icosphere005_2.geometry} material={materials["Fire Orange.002"]} />
			</group>
			<group position={[-0.73, 1.31, -0.03]} rotation={[2.95, -0.38, 0.99]}>
				<mesh geometry={nodes.Icosphere007.geometry} material={materials["Black.003"]} />
				<mesh geometry={nodes.Icosphere007_1.geometry} material={materials["Fire Red.003"]} />
				<mesh geometry={nodes.Icosphere007_2.geometry} material={materials["Fire Orange.003"]} />
			</group>
		</group>
	);
});

export const Planet16 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet16.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere010.geometry} material={materials.blue} />
			<mesh geometry={nodes.Icosphere010_1.geometry} material={materials["Blue Light"]} />
			<mesh geometry={nodes.Icosphere010_2.geometry} material={materials["Blue Lighter"]} />
			<mesh geometry={nodes.Icosphere010_3.geometry} material={materials["Blue Lighterrr"]} />
			<mesh geometry={nodes.Ring1.geometry} material={nodes.Ring1.material} scale={[1, 0.07, 1]} />
			<mesh geometry={nodes.Ring2.geometry} material={nodes.Ring2.material} scale={[1, 0.51, 1]} />
			<mesh geometry={nodes.Ring3.geometry} material={nodes.Ring3.material} scale={[1, 0.21, 1]} />
		</group>
	);
});

export const Planet17 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Planet17.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere017.geometry} material={materials["Purple.002"]} />
			<mesh geometry={nodes.Icosphere017_1.geometry} material={materials.Tirquaz} />
			<mesh geometry={nodes.Ring2.geometry} material={nodes.Ring2.material} scale={[1, 0.51, 1]} />
			<mesh geometry={nodes.Ring5.geometry} material={nodes.Ring5.material} scale={[1, 0.27, 1]} />
			<mesh geometry={nodes.Ring7.geometry} material={nodes.Ring7.material} scale={[1, 0.35, 1]} />
		</group>
	);
});

export const Sun1 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Sun1.glb"));
	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere012.geometry} material={materials["Red.003"]} />
			<mesh geometry={nodes.Icosphere012_1.geometry} material={materials["Yellow.002"]} />
			<mesh geometry={nodes.Icosphere012_2.geometry} material={materials["Orange.001"]} />
		</group>
	);
});

export const Sun2 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(publicPath("/models/Sun2.glb"));

	return (
		<group ref={ref} {...props} dispose={null}>
			{props.children}
			<mesh geometry={nodes.Icosphere013.geometry} material={materials.YellowBase} />
			<mesh geometry={nodes.Icosphere013_1.geometry} material={materials.OrangeBase} />
			<mesh geometry={nodes.Icosphere013_2.geometry} material={materials.RedBase} />
		</group>
	);
});

export const planetsArray = [
	Planet1,
	Planet2,
	Planet3,
	Planet4,
	Planet5,
	Planet5,
	Planet6,
	Planet7,
	Planet8,
	Planet9,
	Planet10,
	Planet11,
	Planet12,
	Planet13,
	Planet14,
	Planet15,
	Planet16,
	Planet17
];
