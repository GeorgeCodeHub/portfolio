import React, { useReducer } from "react";

// Error handler
import { ErrorBoundary } from "react-error-boundary";

import { Loader } from "@react-three/drei";
import * as THREE from "three";

import ErrorFallBackView from "./components/error/ErrorFallBackView";

import CanvasView from "./components/CanvasView";
import NavBar from "./components/navbar/NavBar";

import "./styles/App.scss";

const defaultJourneyStep = {
	key: "Home",
	step: 0,
	title: "WELCOME TRAVELLER",
	titlePosition: new THREE.Vector3(0, 30, 0),
	cameraPosition: new THREE.Vector3(0, 5, 80)
};

export const JourneyStepsContext = React.createContext<any>(null);

const stepsReducer = (state: any, action: { type: any; payload: any }) => {
	// If screen is mobile then use other cameras
	if (action.payload) {
		switch (action.type) {
			case "Home":
				return defaultJourneyStep;
			case "About":
				return {
					key: "About",
					step: 1,
					title: "ABOUT",
					titlePosition: new THREE.Vector3(0, 30, 0),
					cameraPosition: new THREE.Vector3(0, 5, 80)
				};
			case "Experience":
				return {
					key: "Experience",
					step: 2,
					title: "EXPERIENCE",
					titlePosition: new THREE.Vector3(0, 8, 0),
					cameraPosition: new THREE.Vector3(0, 15, 10)
				};
			case "Education":
				return {
					key: "Education",
					step: 3,
					title: "EDUCATION",
					titlePosition: new THREE.Vector3(0, 2, 0),
					cameraPosition: new THREE.Vector3(0, 0.32899705722410416, 10)
				};
			case "Skills":
				return {
					key: "Skills",
					step: 4,
					title: "SKILLS",
					titlePosition: new THREE.Vector3(0, 35, 0),
					cameraPosition: new THREE.Vector3(0, 60, 80)
				};
			case "Projects":
				return {
					key: "Projects",
					step: 5,
					title: "PROJECTS",
					titlePosition: new THREE.Vector3(0, 8, 0),
					cameraPosition: new THREE.Vector3(0, 15, 30)
				};
			case "Contact":
				return {
					key: "Contact",
					step: 6,
					title: "CONTACT",
					titlePosition: new THREE.Vector3(0, 8, 0),
					cameraPosition: new THREE.Vector3(0, 10, 20)
				};
			default:
				return defaultJourneyStep;
		}
	}

	switch (action.type) {
		case "Home":
			return defaultJourneyStep;
		case "About":
			return {
				key: "About",
				step: 1,
				title: "ABOUT",
				titlePosition: new THREE.Vector3(0, 30, 0),
				cameraPosition: new THREE.Vector3(0, 5, 80)
			};
		case "Experience":
			return {
				key: "Experience",
				step: 2,
				title: "EXPERIENCE",
				titlePosition: new THREE.Vector3(0, 3, 0),
				cameraPosition: new THREE.Vector3(0, 6, 7)
			};
		case "Education":
			return {
				key: "Education",
				step: 3,
				title: "EDUCATION",
				titlePosition: new THREE.Vector3(0, 2, 0),
				cameraPosition: new THREE.Vector3(0, 0.22899705722410416, 6)
			};
		case "Skills":
			return {
				key: "Skills",
				step: 4,
				title: "SKILLS",
				titlePosition: new THREE.Vector3(0, 14, 0),
				cameraPosition: new THREE.Vector3(0, 20, 40)
			};
		case "Projects":
			return {
				key: "Projects",
				step: 5,
				title: "PROJECTS",
				titlePosition: new THREE.Vector3(0, 7, 0),
				cameraPosition: new THREE.Vector3(0, 5, 20)
			};
		case "Contact":
			return {
				key: "Contact",
				step: 6,
				title: "CONTACT",
				titlePosition: new THREE.Vector3(0, 8, 0),
				cameraPosition: new THREE.Vector3(0, 10, 20)
			};
		default:
			return defaultJourneyStep;
	}
};

function App() {
	const [journeyStep, dispatchJourneyStep] = useReducer(stepsReducer, defaultJourneyStep);

	return (
		<JourneyStepsContext.Provider value={{ journeyStep, dispatchJourneyStep }}>
			<div className="space-container" style={{ position: "fixed", zIndex: -1 }}>
				<div className="space-background"></div>
			</div>
			<ErrorBoundary FallbackComponent={ErrorFallBackView}>
				<Loader dataInterpolation={(p) => `Loading universe ${p.toFixed(2)}%`} />
				<CanvasView />
				<NavBar />
			</ErrorBoundary>
		</JourneyStepsContext.Provider>
	);
}

export default App;
