import React from "react";

import { JourneyStepsContext } from "../../App";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { PerspectiveCamera, Html } from "@react-three/drei";

function HomeView() {
	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	return (
		<>
			<PerspectiveCamera position={journeyStep.cameraPosition} makeDefault={journeyStep.step === 0} />
			<Html position={[0, 3, 0]} center style={{ width: "100vw" }}>
				<Card variant="outlined" style={{ maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
					<CardHeader style={{ textAlign: "left", borderBottom: "1px solid" }} title="INCOMING TRANSMISSION" />
					<CardContent>
						<Typography variant="subtitle1" gutterBottom style={{ margin: 16, textAlign: "center" }}>
							Hello, I am <b>George Karampelas</b>,
							<br />a full stack web engineer and machine learning practitioner.
						</Typography>
					</CardContent>
					<CardActions style={{ justifyContent: "center" }}>
						<Button
							variant="contained"
							disableElevation
							onClick={() => {
								dispatchJourneyStep({ type: "About" });
							}}
						>
							Continue
						</Button>
					</CardActions>
				</Card>
			</Html>
		</>
	);
}

export default HomeView;
