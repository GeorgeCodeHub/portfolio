import React from "react";

import { JourneyStepsContext } from "../../App";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import { PerspectiveCamera, Html } from "@react-three/drei";

import Palette from "../../utils/Palette";

import ProfilePic from "../../images/profile.jpg";

function AboutView({
	setChangedView
}: {
	setChangedView: React.Dispatch<
		React.SetStateAction<{
			duration: number;
			isChanged: boolean;
		}>
	>;
}) {
	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	const onBeginJourneyClick = () => {
		// Set animation for transition from one view to another
		setChangedView({ duration: 1000, isChanged: true });

		setTimeout(() => {
			dispatchJourneyStep({ type: "Experience" });
		}, 1000);
	};

	return (
		<>
			<PerspectiveCamera position={journeyStep.cameraPosition} makeDefault={journeyStep.step === 1} />
			<Html position={[0, 3, 0]} center style={{ width: "100vw" }}>
				<Palette>
					<Grow in={journeyStep.step === 1}>
						<Card variant="outlined" style={{ maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
							<CardHeader style={{ textAlign: "left", borderBottom: "1px solid #1D5560" }} title="WHO IS THIS" />
							<CardContent>
								<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
									<Grid item xs={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
										<Avatar alt="George Profile pic" src={ProfilePic} sx={{ width: 200, height: 200 }} />
									</Grid>
									<Grid item xs={8}>
										<Typography variant="subtitle1" gutterBottom>
											I am an experienced software developer eager to always learn new things and experiment with new
											technologies.
										</Typography>
										<Typography variant="subtitle1" gutterBottom>
											I have never stopped chasing my passion and creating new experiences with other people. As a
											result my path has taken me through many twists and turns. From a game developer at a non-profit,
											to a software lead in many companies.
										</Typography>
										<Typography variant="subtitle1" gutterBottom>
											Available remotely: UTC +2
										</Typography>
										<Typography variant="subtitle1" gutterBottom>
											Current Focus: <Link href="https://reactjs.org/">React</Link> {"// "}
											<Link href="https://fastapi.tiangolo.com/">FastAPI</Link> {"// "}
											<Link href="https://www.tensorflow.org/">Tensorflow</Link> {"// "}
											<Link href="https://pytorch.org/">Pytorch</Link>
										</Typography>
									</Grid>
								</Grid>
							</CardContent>
							<CardActions style={{ justifyContent: "center" }}>
								<Button
									variant="contained"
									disableElevation
									onClick={() => {
										onBeginJourneyClick();
									}}
								>
									Begin Journey
								</Button>
							</CardActions>
						</Card>
					</Grow>
				</Palette>
			</Html>
		</>
	);
}

export default AboutView;
