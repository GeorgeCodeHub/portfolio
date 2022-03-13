import React from "react";
import { useGLTF } from "@react-three/drei";

useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite1.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite2.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite3.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite4.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite5.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite6.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite7.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite8.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite9.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite10.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite11.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite12.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite13.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite14.glb");
useGLTF.preload(process.env.PUBLIC_URL + "/models/Satellite15.glb");

export const Satellite1 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite1.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<group position={[1.01, 0, 0.03]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.38, 0.05, 0.38]}>
				<mesh geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} />
				<mesh geometry={nodes.Cylinder001_1.geometry} material={nodes.Cylinder001_1.material} />
			</group>
			<mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} />
			<mesh geometry={nodes.Cylinder_1.geometry} material={materials.SatelliteGrey} />
			<mesh geometry={nodes.Cylinder_2.geometry} material={nodes.Cylinder_2.material} />
			<mesh geometry={nodes.Cylinder_3.geometry} material={materials.SatelliteGreyDark} />
			<group position={[-0.32, 0, 2.7]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.08, 0.29, 0.08]}>
				<mesh geometry={nodes.Cylinder008.geometry} material={materials["SatelliteBase.001"]} />
				<mesh geometry={nodes.Cylinder008_1.geometry} material={materials["SatelliteBluePanel.001"]} />
			</group>
			<group position={[-0.32, 0, -2.7]} rotation={[Math.PI / 2, 0, 0]} scale={[0.08, 0.29, 0.08]}>
				<mesh geometry={nodes.Cylinder003.geometry} material={nodes.Cylinder003.material} />
				<mesh geometry={nodes.Cylinder003_1.geometry} material={materials.SatelliteBluePanel} />
			</group>
		</group>
	);
});

export const Satellite2 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite2.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<group scale={[1, 0.75, 1]}>
				<mesh geometry={nodes.Cylinder009.geometry} material={materials.SatelliteBase} />
				<mesh geometry={nodes.Cylinder009_1.geometry} material={materials.SatelliteGrey} />
				<mesh geometry={nodes.Cylinder009_2.geometry} material={materials.SatelliteGreyLight} />
			</group>
			<group position={[0.22, 3.72, -1.44]} rotation={[-Math.PI / 2, -0.44, 0]} scale={[0.03, 0.02, 1.57]}>
				<mesh geometry={nodes.Cube006.geometry} material={materials["SatelliteBase.002"]} />
				<mesh geometry={nodes.Cube006_1.geometry} material={materials["SatelliteBluePanel.002"]} />
			</group>
			<group position={[0.22, 3.72, 1.44]} rotation={[-Math.PI / 2, -0.44, 0]} scale={[0.03, 0.02, 1.57]}>
				<mesh geometry={nodes.Cube007.geometry} material={materials["SatelliteBase.003"]} />
				<mesh geometry={nodes.Cube007_1.geometry} material={materials["SatelliteBluePanel.003"]} />
			</group>
		</group>
	);
});
export const Satellite3 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite3.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<mesh
				geometry={nodes["Satellite3-buttons"].geometry}
				material={materials.SatelliteGreyDark}
				position={[0.64, 1.22, 0.5]}
				scale={0.05}
			/>
			<group position={[1.74, 0, 0.03]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.38, 0.05, 0.38]}>
				<mesh geometry={nodes.Cylinder011.geometry} material={materials["SatelliteBase.004"]} />
				<mesh geometry={nodes.Cylinder011_1.geometry} material={materials["SatelliteGreyLight.001"]} />
			</group>
			<mesh
				geometry={nodes["Satellite3-main"].geometry}
				material={materials.SatelliteBaseOrange}
				scale={[1.72, 1, 1]}
			/>
			<group position={[0, 0, -5.61]} rotation={[0, 0, Math.PI / 6]} scale={[0.15, 1, 3.7]}>
				<mesh geometry={nodes.Cube012.geometry} material={materials.SatelliteBase} />
				<mesh geometry={nodes.Cube012_1.geometry} material={materials.SatelliteBluePanel} />
			</group>
			<group position={[0, 0, 5.61]} rotation={[-Math.PI, 0, -Math.PI / 6]} scale={[0.15, 1, 3.7]}>
				<mesh geometry={nodes.Cube015.geometry} material={materials["SatelliteBase.005"]} />
				<mesh geometry={nodes.Cube015_1.geometry} material={materials["SatelliteBluePanel.004"]} />
			</group>
		</group>
	);
});

export const Satellite4 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite4.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<group position={[0, 4.19, 0]} scale={[1, 0.5, 1]}>
				<mesh geometry={nodes.Cylinder014.geometry} material={nodes.Cylinder014.material} />
				<mesh geometry={nodes.Cylinder014_1.geometry} material={nodes.Cylinder014_1.material} />
			</group>
			<mesh geometry={nodes.Cylinder013.geometry} material={nodes.Cylinder013.material} />
			<mesh geometry={nodes.Cylinder013_1.geometry} material={materials.SatelliteGreyLight} />
			<mesh geometry={nodes.Cylinder013_2.geometry} material={materials.SatelliteGrey} />
			<mesh geometry={nodes.Cylinder013_3.geometry} material={nodes.Cylinder013_3.material} />
			<mesh geometry={nodes.Cylinder013_4.geometry} material={materials.SatelliteRed} />
			<group position={[0, 0.7, -5.11]} rotation={[0, 0, Math.PI / 3]} scale={[0.15, 1, 3.7]}>
				<mesh geometry={nodes.Cube017.geometry} material={materials["SatelliteBase.007"]} />
				<mesh geometry={nodes.Cube017_1.geometry} material={materials["SatelliteBluePanel.006"]} />
			</group>
			<group position={[0, 0.7, 5.11]} rotation={[-Math.PI, 0, -Math.PI / 3]} scale={[0.15, 1, 3.7]}>
				<mesh geometry={nodes.Cube016.geometry} material={materials["SatelliteBase.006"]} />
				<mesh geometry={nodes.Cube016_1.geometry} material={materials["SatelliteBluePanel.005"]} />
			</group>
		</group>
	);
});

export const Satellite5 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite5.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<group position={[0, 0.1, 0]}>
				<mesh geometry={nodes.Cylinder016.geometry} material={nodes.Cylinder016.material} />
				<mesh geometry={nodes.Cylinder016_1.geometry} material={materials.SatelliteGreyDark} />
				<mesh geometry={nodes.Cylinder016_2.geometry} material={materials.SatelliteGreyLight} />
				<mesh geometry={nodes.Cylinder016_3.geometry} material={materials.SatelliteBlack} />
				<mesh geometry={nodes.Cylinder016_4.geometry} material={materials.SatelliteWindowBlack} />
			</group>
			<group position={[0, 0, -4.96]} rotation={[Math.PI / 2, -1.57, 0]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder019.geometry} material={materials["SatelliteBase.011"]} />
				<mesh geometry={nodes.Cylinder019_1.geometry} material={materials["SatelliteBluePanel.008"]} />
				<mesh geometry={nodes.Cylinder019_2.geometry} material={materials["SatelliteGrey.001"]} />
			</group>
			<group position={[0, 0, 4.96]} rotation={[-Math.PI / 2, 1.57, 0]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder017.geometry} material={nodes.Cylinder017.material} />
				<mesh geometry={nodes.Cylinder017_1.geometry} material={materials.SatelliteBluePanel} />
				<mesh geometry={nodes.Cylinder017_2.geometry} material={materials.SatelliteGrey} />
			</group>
		</group>
	);
});
export const Satellite6 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite6.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<group position={[-4.95, 1.73, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder025.geometry} material={materials["SatelliteBase.016"]} />
				<mesh geometry={nodes.Cylinder025_1.geometry} material={materials["SatelliteBluePanel.012"]} />
				<mesh geometry={nodes.Cylinder025_2.geometry} material={materials["SatelliteGrey.006"]} />
				<mesh geometry={nodes.Cylinder025_3.geometry} material={materials["SatelliteBase.013"]} />
				<mesh geometry={nodes.Cylinder025_4.geometry} material={materials["SatelliteBluePanel.009"]} />
				<mesh geometry={nodes.Cylinder025_5.geometry} material={materials["SatelliteGrey.003"]} />
				<mesh geometry={nodes.Cylinder025_6.geometry} material={materials["SatelliteBase.014"]} />
				<mesh geometry={nodes.Cylinder025_7.geometry} material={materials["SatelliteBluePanel.010"]} />
				<mesh geometry={nodes.Cylinder025_8.geometry} material={materials["SatelliteGrey.004"]} />
				<mesh geometry={nodes.Cylinder025_9.geometry} material={materials["SatelliteBase.015"]} />
				<mesh geometry={nodes.Cylinder025_10.geometry} material={materials["SatelliteBluePanel.011"]} />
				<mesh geometry={nodes.Cylinder025_11.geometry} material={materials["SatelliteGrey.005"]} />
			</group>
			<group position={[-0.52, 4.8, 1.29]} rotation={[Math.PI / 2, 0, 0.38]} scale={[1, 0.5, 1]}>
				<mesh geometry={nodes.Cylinder021.geometry} material={materials["SatelliteBase.012"]} />
				<mesh geometry={nodes.Cylinder021_1.geometry} material={materials["SatelliteGreyDark.001"]} />
			</group>
			<mesh geometry={nodes["Satellite6-main"].geometry} material={nodes["Satellite6-main"].material} />
		</group>
	);
});

export const Satellite7 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite7.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<group position={[0.8, 1.81, 0]} rotation={[0, 0, -Math.PI / 4]} scale={[0.64, 0.32, 0.64]}>
				<mesh geometry={nodes.Cylinder027.geometry} material={materials["SatelliteBase.017"]} />
				<mesh geometry={nodes.Cylinder027_1.geometry} material={materials["SatelliteGreyDark.002"]} />
				<mesh geometry={nodes.Cylinder027_2.geometry} material={materials["SatelliteGreyLight.003"]} />
			</group>
			<mesh geometry={nodes.Cylinder026.geometry} material={materials.SatelliteBase} />
			<mesh geometry={nodes.Cylinder026_1.geometry} material={materials.SatelliteBlack} />
			<mesh geometry={nodes.Cylinder026_2.geometry} material={materials.SatelliteGrey} />
			<mesh geometry={nodes.Cylinder026_3.geometry} material={materials.SatelliteBaseOrange} />
			<mesh geometry={nodes.Cylinder026_4.geometry} material={materials.SatelliteRed} />
			<group position={[-2.78, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[0.08, 0.29, 0.08]}>
				<mesh geometry={nodes.Cylinder028.geometry} material={materials["SatelliteBase.018"]} />
				<mesh geometry={nodes.Cylinder028_1.geometry} material={materials["SatelliteBluePanel.013"]} />
			</group>
		</group>
	);
});

export const Satellite8 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite8.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<mesh
				geometry={nodes["Satellite8-antenna"].geometry}
				material={materials.SatelliteGrey}
				position={[-0.2, 2.15, 0.49]}
				rotation={[1.11, -0.18, 0.34]}
				scale={0.13}
			/>
			<group position={[0.52, 2.31, 0.03]} rotation={[Math.PI / 2, 0.49, -Math.PI / 2]} scale={[0.38, 0.05, 0.38]}>
				<mesh geometry={nodes.Cylinder030.geometry} material={materials["SatelliteBase.019"]} />
				<mesh geometry={nodes.Cylinder030_1.geometry} material={materials["SatelliteGreyLight.004"]} />
			</group>
			<group position={[0, -1.63, 0]} scale={[0.8, 0.4, 0.8]}>
				<mesh geometry={nodes.Cylinder029.geometry} material={materials.SatelliteBase} />
				<mesh geometry={nodes.Cylinder029_1.geometry} material={materials.SatelliteGreyLight} />
				<mesh geometry={nodes.Cylinder029_2.geometry} material={materials.SatelliteGreen} />
				<mesh geometry={nodes.Cylinder029_3.geometry} material={materials.SatelliteGreyDark} />
			</group>
			<group position={[0, 0, 3.54]} rotation={[-Math.PI / 2, -Math.PI / 4, 0]} scale={[0.08, 0.26, 0.08]}>
				<mesh geometry={nodes.Cylinder033.geometry} material={materials["SatelliteBase.020"]} />
				<mesh geometry={nodes.Cylinder033_1.geometry} material={materials["SatelliteBluePanel.014"]} />
				<mesh geometry={nodes.Cylinder033_2.geometry} material={materials["SatelliteGrey.008"]} />
			</group>
		</group>
	);
});

export const Satellite9 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite9.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<group position={[-0.33, 7.14, 0.81]} rotation={[1.08, -0.19, 0.34]} scale={[0.08, 0.08, 0.08]}>
				<mesh geometry={nodes.Cylinder036.geometry} material={materials["SatelliteGrey.010"]} />
				<mesh geometry={nodes.Cylinder036_1.geometry} material={materials["SatelliteGrey.009"]} />
				<mesh geometry={nodes.Cylinder036_2.geometry} material={materials["SatelliteGrey.011"]} />
			</group>
			<group position={[0.7, 4.03, 2.55]} rotation={[Math.PI / 2, 0, 0]} scale={[0.28, 0.04, 0.28]}>
				<mesh geometry={nodes.Cylinder041.geometry} material={materials["SatelliteBase.024"]} />
				<mesh geometry={nodes.Cylinder041_1.geometry} material={materials["SatelliteGreyLight.006"]} />
				<mesh geometry={nodes.Cylinder041_2.geometry} material={materials["SatelliteGrey.014"]} />
			</group>
			<group
				position={[1.83, 7.28, 0.03]}
				rotation={[Math.PI / 2, Math.PI / 6, -Math.PI / 2]}
				scale={[0.38, 0.05, 0.38]}
			>
				<mesh geometry={nodes.Cylinder038.geometry} material={materials["SatelliteBase.021"]} />
				<mesh geometry={nodes.Cylinder038_1.geometry} material={materials["SatelliteGreyLight.005"]} />
				<mesh geometry={nodes.Cylinder038_2.geometry} material={nodes.Cylinder038_2.material} />
			</group>
			<mesh geometry={nodes.Cylinder034.geometry} material={materials.SatelliteBase} />
			<mesh geometry={nodes.Cylinder034_1.geometry} material={materials.SatelliteGreyDark} />
			<mesh geometry={nodes.Cylinder034_2.geometry} material={nodes.Cylinder034_2.material} />
			<mesh geometry={nodes.Cylinder034_3.geometry} material={materials.SatelliteBlack} />
			<group position={[0, 0.46, -4.96]} rotation={[Math.PI / 2, Math.PI / 3, 0]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder039.geometry} material={materials["SatelliteBase.022"]} />
				<mesh geometry={nodes.Cylinder039_1.geometry} material={materials["SatelliteBluePanel.015"]} />
				<mesh geometry={nodes.Cylinder039_2.geometry} material={materials["SatelliteGrey.012"]} />
			</group>
			<group position={[0, 0.46, 4.96]} rotation={[-Math.PI / 2, -Math.PI / 3, 0]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder040.geometry} material={materials["SatelliteBase.023"]} />
				<mesh geometry={nodes.Cylinder040_1.geometry} material={materials["SatelliteBluePanel.016"]} />
				<mesh geometry={nodes.Cylinder040_2.geometry} material={materials["SatelliteGrey.013"]} />
			</group>
		</group>
	);
});

export const Satellite10 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite10.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<mesh
				geometry={nodes["Satellite10-antenna"].geometry}
				material={materials["SatelliteGrey.017"]}
				position={[0.93, -0.67, 0.35]}
				rotation={[0, -0.4, -Math.PI / 2]}
				scale={0.09}
			/>
			<group position={[0, 1.66, 0]} scale={[0.85, 0.1, 0.85]}>
				<mesh geometry={nodes.Cylinder043.geometry} material={nodes.Cylinder043.material} />
				<mesh geometry={nodes.Cylinder043_1.geometry} material={materials["Material.030"]} />
			</group>
			<mesh geometry={nodes.Cylinder042.geometry} material={materials.SatelliteBase} />
			<mesh geometry={nodes.Cylinder042_1.geometry} material={materials.SatelliteGrey} />
			<mesh geometry={nodes.Cylinder042_2.geometry} material={nodes.Cylinder042_2.material} />
			<mesh geometry={nodes.Cylinder042_3.geometry} material={materials.SatelliteGreyLight} />
			<mesh geometry={nodes.Cylinder042_4.geometry} material={materials.SatelliteGreen} />
			<group position={[0, -0.14, -4.96]} rotation={[Math.PI / 2, Math.PI / 3, 0]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder045.geometry} material={materials["SatelliteBase.026"]} />
				<mesh geometry={nodes.Cylinder045_1.geometry} material={materials["SatelliteBluePanel.018"]} />
				<mesh geometry={nodes.Cylinder045_2.geometry} material={materials["SatelliteGrey.016"]} />
			</group>
			<group position={[0, -0.14, 4.96]} rotation={[-Math.PI / 2, -Math.PI / 3, 0]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder044.geometry} material={materials["SatelliteBase.025"]} />
				<mesh geometry={nodes.Cylinder044_1.geometry} material={materials["SatelliteBluePanel.017"]} />
				<mesh geometry={nodes.Cylinder044_2.geometry} material={materials["SatelliteGrey.015"]} />
			</group>
		</group>
	);
});

export const Satellite11 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite11.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<mesh geometry={nodes.Cylinder022.geometry} material={materials["SatelliteBase.001"]} />
			<mesh geometry={nodes.Cylinder022_1.geometry} material={materials.SatelliteGreyDark} />
			<mesh geometry={nodes.Cylinder022_2.geometry} material={materials.SatelliteRed} />
			<mesh
				geometry={nodes["Satellite11-antenna"].geometry}
				material={materials["SatelliteGrey.018"]}
				position={[0.93, -0.67, 0.35]}
				rotation={[0, -0.4, -Math.PI / 2]}
				scale={0.09}
			/>
			<group position={[0, 1.37, 0]} rotation={[0, Math.PI / 2, 0]} scale={[0.38, 0.05, 0.38]}>
				<mesh geometry={nodes.Cylinder024.geometry} material={materials["SatelliteBase.008"]} />
				<mesh geometry={nodes.Cylinder024_1.geometry} material={materials["SatelliteGreyLight.007"]} />
				<mesh geometry={nodes.Cylinder024_2.geometry} material={materials["SpaceshipBase.001"]} />
			</group>
			<group position={[0, 0, -3.2]} rotation={[Math.PI / 2, Math.PI / 3, 0]} scale={[0.08, 0.23, 0.08]}>
				<mesh geometry={nodes.Cylinder035.geometry} material={materials["SatelliteBase.010"]} />
				<mesh geometry={nodes.Cylinder035_1.geometry} material={materials["SatelliteBluePanel.019"]} />
				<mesh geometry={nodes.Cylinder035_2.geometry} material={materials["SatelliteGrey.020"]} />
			</group>
			<group position={[0, 0, 3.2]} rotation={[-Math.PI / 2, -Math.PI / 3, 0]} scale={[0.08, 0.23, 0.08]}>
				<mesh geometry={nodes.Cylinder031.geometry} material={materials["SatelliteBase.009"]} />
				<mesh geometry={nodes.Cylinder031_1.geometry} material={materials["SatelliteBluePanel.007"]} />
				<mesh geometry={nodes.Cylinder031_2.geometry} material={materials["SatelliteGrey.019"]} />
			</group>
		</group>
	);
});

export const Satellite12 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite12.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<group scale={[1.45, 1.82, 1]}>
				<mesh geometry={nodes.Cube010.geometry} material={materials["SatelliteBase.001"]} />
				<mesh geometry={nodes.Cube010_1.geometry} material={materials.SatelliteBluePanel} />
				<mesh geometry={nodes.Cube010_2.geometry} material={materials.SatelliteGreyDark} />
			</group>
			<mesh
				geometry={nodes["Satellite12-antenna"].geometry}
				material={materials["SatelliteGrey.021"]}
				position={[1.06, 2.28, 0.66]}
				scale={0.09}
			/>
			<group position={[-5.56, -1.25, -0.03]} rotation={[0, 0, -Math.PI / 2]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder049.geometry} material={materials["SatelliteBase.028"]} />
				<mesh geometry={nodes.Cylinder049_1.geometry} material={materials["SatelliteBluePanel.020"]} />
				<mesh geometry={nodes.Cylinder049_2.geometry} material={materials["SatelliteGrey.022"]} />
			</group>
			<group position={[-2.79, -0.29, -1.92]} rotation={[-Math.PI / 2, 0, Math.PI / 6]} scale={[0.38, 0.05, 0.38]}>
				<mesh geometry={nodes.Cylinder052.geometry} material={materials["SatelliteBase.031"]} />
				<mesh geometry={nodes.Cylinder052_1.geometry} material={materials["SatelliteGreyLight.011"]} />
				<mesh geometry={nodes.Cylinder052_2.geometry} material={materials["SpaceshipBase.005"]} />
				<mesh geometry={nodes.Cylinder052_3.geometry} material={materials["SatelliteBase.027"]} />
				<mesh geometry={nodes.Cylinder052_4.geometry} material={materials["SatelliteGreyLight.008"]} />
				<mesh geometry={nodes.Cylinder052_5.geometry} material={materials["SpaceshipBase.002"]} />
				<mesh geometry={nodes.Cylinder052_6.geometry} material={materials["SatelliteBase.029"]} />
				<mesh geometry={nodes.Cylinder052_7.geometry} material={materials["SatelliteGreyLight.009"]} />
				<mesh geometry={nodes.Cylinder052_8.geometry} material={materials["SpaceshipBase.003"]} />
				<mesh geometry={nodes.Cylinder052_9.geometry} material={materials["SatelliteBase.030"]} />
				<mesh geometry={nodes.Cylinder052_10.geometry} material={materials["SatelliteGreyLight.010"]} />
				<mesh geometry={nodes.Cylinder052_11.geometry} material={materials["SpaceshipBase.004"]} />
			</group>
		</group>
	);
});

export const Satellite13 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite13.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<mesh geometry={nodes.Cylinder053.geometry} material={materials.SatelliteGolden} />
			<mesh geometry={nodes.Cylinder053_1.geometry} material={materials.SatelliteGreyDark} />
			<mesh geometry={nodes.Cylinder053_2.geometry} material={materials.SatelliteWindowBlack} />
			<group position={[0, 1.7, 0]} scale={[0.64, 0.32, 0.64]}>
				<mesh geometry={nodes.Cylinder054.geometry} material={materials["SatelliteBase.032"]} />
				<mesh geometry={nodes.Cylinder054_1.geometry} material={materials["SatelliteGreyDark.003"]} />
				<mesh geometry={nodes.Cylinder054_2.geometry} material={materials["SatelliteGreyLight.012"]} />
			</group>
			<group position={[-4.44, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder055.geometry} material={materials["SatelliteBase.033"]} />
				<mesh geometry={nodes.Cylinder055_1.geometry} material={materials["SatelliteBluePanel.021"]} />
				<mesh geometry={nodes.Cylinder055_2.geometry} material={materials["SatelliteGrey.024"]} />
			</group>
			<group position={[2.23, 0, 3.86]} rotation={[0, -Math.PI / 3, Math.PI / 2]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder056.geometry} material={materials["SatelliteBase.034"]} />
				<mesh geometry={nodes.Cylinder056_1.geometry} material={materials["SatelliteBluePanel.022"]} />
				<mesh geometry={nodes.Cylinder056_2.geometry} material={materials["SatelliteGrey.025"]} />
			</group>
			<group position={[2.21, 0, -3.83]} rotation={[0, Math.PI / 3, Math.PI / 2]} scale={[0.08, 0.42, 0.08]}>
				<mesh geometry={nodes.Cylinder057.geometry} material={materials["SatelliteBase.035"]} />
				<mesh geometry={nodes.Cylinder057_1.geometry} material={materials["SatelliteBluePanel.023"]} />
				<mesh geometry={nodes.Cylinder057_2.geometry} material={materials["SatelliteGrey.026"]} />
			</group>
		</group>
	);
});

export const Satellite14 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite14.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<mesh geometry={nodes.Cylinder058.geometry} material={materials["SatelliteBase.001"]} />
			<mesh geometry={nodes.Cylinder058_1.geometry} material={materials.SatelliteGreyDark} />
			<mesh geometry={nodes.Cylinder058_2.geometry} material={materials.SpaceBaseBlack} />
			<group position={[0, 4.86, 0]} scale={[1.38, 0.69, 1.38]}>
				<mesh geometry={nodes.Cylinder059.geometry} material={materials["SatelliteBase.036"]} />
				<mesh geometry={nodes.Cylinder059_1.geometry} material={materials["SatelliteGreyDark.004"]} />
				<mesh geometry={nodes.Cylinder059_2.geometry} material={materials["SatelliteGreyLight.013"]} />
			</group>
			<group position={[-5.97, 0, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[0.09, 0.52, 0.09]}>
				<mesh geometry={nodes.Cylinder061.geometry} material={materials["SatelliteBase.038"]} />
				<mesh geometry={nodes.Cylinder061_1.geometry} material={materials["SatelliteBluePanel.025"]} />
				<mesh geometry={nodes.Cylinder061_2.geometry} material={materials["SatelliteGrey.029"]} />
			</group>
			<group position={[5.97, 0, 0]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[0.09, 0.52, 0.09]}>
				<mesh geometry={nodes.Cylinder062.geometry} material={materials["SatelliteBase.039"]} />
				<mesh geometry={nodes.Cylinder062_1.geometry} material={materials["SatelliteBluePanel.026"]} />
				<mesh geometry={nodes.Cylinder062_2.geometry} material={materials["SatelliteGrey.030"]} />
			</group>
		</group>
	);
});

export const Satellite15 = React.forwardRef((props: any, ref: any) => {
	const { nodes, materials }: any = useGLTF(process.env.PUBLIC_URL + "/models/Satellite15.glb");
	return (
		<group ref={ref} {...props} dispose={null}>
			<mesh
				geometry={nodes["Satellite15-antenna1"].geometry}
				material={materials["SatelliteGrey.031"]}
				position={[0, 0, -0.99]}
				rotation={[-Math.PI / 2, 0, 0]}
				scale={0.15}
			/>
			<group rotation={[0, Math.PI / 8, 0]} scale={[1, 0.58, 1]}>
				<mesh geometry={nodes.Cylinder066.geometry} material={materials["SatelliteBase.005"]} />
				<mesh geometry={nodes.Cylinder066_1.geometry} material={materials.SatelliteGreyDark} />
				<mesh geometry={nodes.Cylinder066_2.geometry} material={materials.SatelliteBlack} />
				<mesh geometry={nodes.Cylinder066_3.geometry} material={materials.SatelliteGolden} />
				<mesh geometry={nodes.Cylinder066_4.geometry} material={materials.SatelliteBluePanel} />
				<mesh geometry={nodes.Cylinder066_5.geometry} material={materials.SatelliteWindowBlack} />
			</group>
			<mesh
				geometry={nodes["Satellite15-antenna2"].geometry}
				material={materials["SatelliteGrey.032"]}
				position={[0.71, 0, 0.74]}
				rotation={[-Math.PI / 2, 0, -2.36]}
				scale={0.15}
			/>
			<mesh
				geometry={nodes["Satellite15-antenna3"].geometry}
				material={materials["SatelliteGrey.033"]}
				position={[-0.71, 0, 0.76]}
				rotation={[-Math.PI / 2, 0, 2.36]}
				scale={0.15}
			/>
		</group>
	);
});

export const satelliteArray = [
	Satellite1,
	Satellite2,
	Satellite3,
	Satellite4,
	Satellite5,
	Satellite6,
	Satellite6,
	Satellite7,
	Satellite8,
	Satellite9,
	Satellite10,
	Satellite11,
	Satellite12,
	Satellite13,
	Satellite14,
	Satellite15
];
