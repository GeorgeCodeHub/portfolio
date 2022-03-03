import React, { useEffect, Suspense } from "react";

import { JourneyStepsContext } from "../App";

import Typography from "@mui/material/Typography";

import { Canvas } from "@react-three/fiber";
import { Html, Stars, useContextBridge } from "@react-three/drei";

import StarsCube from "../utils/StarsCube";

import HomeView from "./home/HomeView";
import AboutView from "./about/AboutView";
import ExperienceView from "./experience/ExperienceView";
import EducationView from "./education/EducationView";
import SkillsView from "./skills/SkillsView";
import ProjectsView from "./projects/ProjectsView";

function CanvasView() {
	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	const ContextBridge = useContextBridge(JourneyStepsContext);

	const stepController = () => {
		switch (journeyStep.step) {
			case 0:
				return <HomeView />;
			case 1:
				return <AboutView />;
			case 2:
				return <ExperienceView />;
			case 3:
				return <EducationView />;
			case 4:
				return <SkillsView />;
			case 5:
			case 6:
				return <ProjectsView />;
			default:
				return <></>;
		}
	};

	useEffect(() => {
		dispatchJourneyStep({ type: "Home" });
	}, [dispatchJourneyStep]);

	return (
		<div className="view-container">
			<Canvas camera={{ position: journeyStep.cameraPosition, zoom: 1.5 }}>
				<Suspense fallback={null}>
					<ambientLight />
					<pointLight position={[0, 0, 0]} />
					{journeyStep.step < 2 && <StarsCube enableFalling={true} />}
					<Stars radius={10} depth={100} count={2000} factor={4} saturation={1} fade />
					<ContextBridge>
						<Html position={journeyStep.titlePosition} center style={{ textAlign: "center" }}>
							<Typography className="step-title-top" variant="h2">
								{journeyStep.title}
							</Typography>
						</Html>

						{stepController()}
					</ContextBridge>
				</Suspense>
			</Canvas>
		</div>
	);
}

export default CanvasView;
