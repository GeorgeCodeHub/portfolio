import { Dispatch, SetStateAction } from "react";

export interface InitialStateJourney {
	step: number;
	title: string;
	titlePosition: any;
	cameraPosition: any;
}

export interface ExperienceIndicatorTypes {
	radius: number;
	jobItem: { title: string; dateFrom: string; dateTo: string; speed: number };
	follow: boolean;
	setFollow: Dispatch<SetStateAction<boolean>>;
}

export interface DialogTitleProps {
	id: string;
	children?: React.ReactNode;
	onClose: () => void;
}
