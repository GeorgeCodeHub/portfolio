import React from "react";

import { JourneyStepsContext } from "../../App";

import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { PerspectiveCamera, Html } from "@react-three/drei";

import Palette from "../../utils/Palette";

import { personalInfo } from "../../utils/dataSet";

const breakpointsCard = {
	width: {
		xs: 200, // theme.breakpoints.up('xxs')
		sm: 380, // theme.breakpoints.up('sm')
		md: 600, // theme.breakpoints.up('md')
		lg: 600, // theme.breakpoints.up('lg')
		xl: 650 // theme.breakpoints.up('xl')
	}
};

function HomeView() {
	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	return (
		<>
			<PerspectiveCamera position={journeyStep.cameraPosition} makeDefault={journeyStep.step === 0} />
			<Html position={[0, 3, 0]} center style={{ width: "100vw" }}>
				<Palette>
					<Grow in={journeyStep.step === 0}>
						<Card sx={breakpointsCard} variant="outlined" style={{ marginLeft: "auto", marginRight: "auto" }}>
							<CardHeader
								style={{ textAlign: "left", borderBottom: "1px solid #1D5560" }}
								title="INCOMING TRANSMISSION"
							/>
							<CardContent>
								<Typography variant="subtitle1" gutterBottom style={{ margin: 16, textAlign: "center" }}>
									Hello, I am <b>{personalInfo.name}</b>,
									<br />a {personalInfo.roles.join(", ").replace(/, ([^,]*)$/, " and $1")}.
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
					</Grow>
				</Palette>
			</Html>
		</>
	);
}

export default HomeView;
