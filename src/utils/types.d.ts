import { Dispatch, SetStateAction } from "react";

export interface InitialStateJourney {
	step: number;
	title: string;
	titlePosition: any;
	cameraPosition: any;
}

export interface ExperienceIndicatorTypes {
	radius: number;
	jobItem: {
		id: number;
		positionTitle: string;
		companyTitle: string;
		dateFrom: string;
		dateTo: string;
		speed: number;
		offset: number;
	};
	follow: boolean;
	setFollow: Dispatch<SetStateAction<boolean>>;
}

export interface DialogTitleProps {
	id: string;
	itemData?: any;
	onClose: () => void;
}

// ===== Dataset item interfaces =====

// Jobs used in Experience view
export interface JobItem {
	id: number;
	positionTitle: string;
	companyTitle: string;
	description: string;
	// ExperienceView renders these as strings (e.g., "12/12/2021")
	dateFrom: string;
	dateTo: string;
	// Animation params
	speed: number;
	offset: number;
}

// Degrees used in Education view
export interface DegreeItem {
	title: string;
	school: string;
	description: string;
	// EducationLists expects Date objects
	dateFrom: Date;
	dateTo: Date;
}

// Certificates used in Education view
export interface CertificateItem {
	title: string;
	school: string;
	description: string;
	dateAcquired: Date;
}

// Skills
export interface TechnicalSkillItem {
	title: string;
	technologies: string[];
}

// Mapped skill used in the scene (orbitting parameters added in CanvasView)
export interface SkillOrbitItem extends TechnicalSkillItem {
	id: number;
	xRadius: number;
	zRadius: number;
	size: number;
	speed: number;
	offset: number;
	rotationSpeed: number;
}

// Projects
export interface RawProjectItem {
	title: string;
	featured: boolean;
	description: string;
	technologies: string[];
	images: string[];
	githubURL: string;
	runningAppURL: string;
}

// Mapped project used in the scene (augmented in CanvasView)
export interface ProjectOrbitItem extends RawProjectItem {
	id: number;
	selectedModelKey: number;
	xRadius: number;
	zRadius: number;
	size: number;
	speed: number;
	offset: number;
	rotationSpeed: number;
}

// Optional: filter values used in the Projects view
export type ProjectFilterValue =
	| "Featured"
	| "Python"
	| "Javascript"
	| "Typescript"
	| "C#"
	| "PostgreSQL"
	| "Firebase"
	| "ReactJS"
	| "Tensorflow"
	| "Unity3D";

// Aggregate dataset shape provided via DatasetContext
export interface Dataset {
	certificates: CertificateItem[];
	degrees: DegreeItem[];
	jobs: JobItem[];
	projects: ProjectOrbitItem[];
	skills: SkillOrbitItem[];
}
