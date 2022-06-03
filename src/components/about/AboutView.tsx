import React from "react";

import { JourneyStepsContext } from "../../App";

import useMediaQuery from "@mui/material/useMediaQuery";
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

import ProfilePic from "../../images/profile-pic.png";

const focusedTechnologies = [
	{ name: "ReactJS", url: "https://reactjs.org/" },
	{ name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
	{ name: "Tensorflow", url: "https://www.tensorflow.org/" },
	{ name: "Pytorch", url: "https://pytorch.org/" }
];

const breakpointsImage = {
	width: {
		xs: 0, // theme.breakpoints.up('xxs')
		sm: 100, // theme.breakpoints.up('sm')
		md: 100, // theme.breakpoints.up('md')
		lg: 200, // theme.breakpoints.up('lg')
		xl: 200 // theme.breakpoints.up('xl')
	},
	height: {
		xs: 0, // theme.breakpoints.up('xxs')
		sm: 100, // theme.breakpoints.up('sm')
		md: 100, // theme.breakpoints.up('md')
		lg: 200, // theme.breakpoints.up('lg')
		xl: 200 // theme.breakpoints.up('xl')
	}
};

const breakpointsAboutText = {
	height: {
		xs: 300, // theme.breakpoints.up('xxs')
		sm: 300, // theme.breakpoints.up('sm')
		md: "initial", // theme.breakpoints.up('md')
		lg: "initial", // theme.breakpoints.up('lg')
		xl: "initial" // theme.breakpoints.up('xl')
	},
	overflowY: {
		xs: "scroll", // theme.breakpoints.up('xxs')
		sm: "scroll", // theme.breakpoints.up('sm')
		md: "initial", // theme.breakpoints.up('md')
		lg: "initial", // theme.breakpoints.up('lg')
		xl: "initial" // theme.breakpoints.up('xl')
	}
};

const breakpointsCard = {
	width: {
		xs: 300, // theme.breakpoints.up('xxs')
		sm: 380, // theme.breakpoints.up('sm')
		md: 700, // theme.breakpoints.up('md')
		lg: 800, // theme.breakpoints.up('lg')
		xl: 900 // theme.breakpoints.up('xl')
	}
};

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
	const isScreenMobile = useMediaQuery("(max-width:500px)");

	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	const onBeginJourneyClick = () => {
		// Set animation for transition from one view to another
		setChangedView({ duration: 1000, isChanged: true });

		setTimeout(() => {
			dispatchJourneyStep({ type: "Experience", payload: isScreenMobile });
		}, 1000);
	};

	return (
		<>
			<PerspectiveCamera position={journeyStep.cameraPosition} makeDefault={journeyStep.step === 1} />
			<Html position={[0, 3, 0]} center style={{ width: "100vw" }}>
				<Palette>
					<Grow in={journeyStep.step === 1}>
						<Card sx={breakpointsCard} variant="outlined" style={{ marginLeft: "auto", marginRight: "auto" }}>
							<CardHeader style={{ textAlign: "left", borderBottom: "1px solid #1D5560" }} title="WHO IS THIS" />
							<CardContent>
								<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
									<Grid
										item
										xs={0}
										md={4}
										style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}
									>
										<Avatar alt="George Profile pic" src={ProfilePic} sx={breakpointsImage} />
									</Grid>
									<Grid item xs={12} md={8} sx={breakpointsAboutText}>
										<Typography variant="subtitle1" gutterBottom>
											I am <b>George Karampelas</b>, a full stack web engineer and machine learning practitioner eager
											to always learn and work with new technologies. My path has taken me through many twists and
											turns. From a game developer at a non-profit to a software lead in many companies. This has made
											me a great advocate of communication, and teamwork.
										</Typography>
										<Typography variant="subtitle1" gutterBottom>
											Available remotely: UTC +2
										</Typography>
										<Typography variant="subtitle1" gutterBottom>
											Current Focus:{" "}
											{focusedTechnologies.map((tech) => (
												<span key={tech.name}>
													<Link href={tech.url}>{tech.name}</Link> {"// "}
												</span>
											))}
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

export default AboutView;
