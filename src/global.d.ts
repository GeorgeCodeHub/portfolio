// Type declarations for SCSS modules
declare module "*.scss" {
	const content: { [className: string]: string };
	export default content;
}

// Type declarations for CSS modules
declare module "*.css" {
	const content: { [className: string]: string };
	export default content;
}

// Type declarations for image files
declare module "*.png" {
	const value: string;
	export default value;
}

declare module "*.jpg" {
	const value: string;
	export default value;
}

declare module "*.jpeg" {
	const value: string;
	export default value;
}

declare module "*.gif" {
	const value: string;
	export default value;
}

declare module "*.svg" {
	const value: string;
	export default value;
}

declare module "*.webp" {
	const value: string;
	export default value;
}

// Type declarations for font files
declare module "*.woff";
declare module "*.woff2";
declare module "*.ttf";
declare module "*.eot";

// Type declarations for 3D model files
declare module "*.glb" {
	const value: string;
	export default value;
}

declare module "*.gltf" {
	const value: string;
	export default value;
}
