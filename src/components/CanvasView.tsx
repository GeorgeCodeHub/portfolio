import React, { useState, Suspense } from "react";

import { animated, useSpring } from "react-spring";

import { JourneyStepsContext } from "../App";

import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { Canvas } from "@react-three/fiber";
import { Html, Stars, useContextBridge } from "@react-three/drei";

import StarsCube from "../utils/StarsCube";

import HomeView from "./home/HomeView";
import AboutView from "./about/AboutView";
import ExperienceView from "./experience/ExperienceView";
import EducationView from "./education/EducationView";
import SkillsView from "./skills/SkillsView";
import ProjectsView from "./projects/ProjectsView";

import { projectFilters } from "../utils/dataSet";

const color = "#4FBDBA !important";

const useStyles: any = makeStyles(() => ({
	select: {
		"&:before": {
			borderColor: color
		},
		"&:after": {
			borderColor: color
		}
	},
	icon: {
		transform: "scale(2)",
		fill: color
	},

	menuPaper: {
		maxHeight: "200px !important",
		background: "#072227",
		zIndex: 99999999
	},
	selectItem: {
		backgroundColor: "#4FBDBA !important"
	},
	menuList: {
		background: "#072227",
		zIndex: 99999999
	}
}));

const breakpointsCard = {
	fontSize: {
		xs: "1.1rem", // theme.breakpoints.up('xxs')
		sm: "2.5rem", // theme.breakpoints.up('sm')
		md: "3.75rem", // theme.breakpoints.up('md')
		lg: "3.75rem", // theme.breakpoints.up('lg')
		xl: "3.75rem" // theme.breakpoints.up('xl')
	}
};

function CanvasView() {
	const classes = useStyles();

	const [changedView, setChangedView] = useState({ duration: 0, isChanged: false });
	const [selectedFilter, setSelectedFilter] = React.useState("Featured");

	const { journeyStep } = React.useContext(JourneyStepsContext);

	const ContextBridge = useContextBridge(JourneyStepsContext);

	const handleSelectedChange = (event: SelectChangeEvent) => {
		setSelectedFilter(event.target.value as string);
	};

	const { x } = useSpring({
		from: { x: 0 },
		x: changedView.isChanged ? 0 : 1,
		config: { duration: changedView.duration }
	});

	const stepController = () => {
		switch (journeyStep.step) {
			case 0:
				return <HomeView />;
			case 1:
				return <AboutView setChangedView={setChangedView} />;
			case 2:
				return <ExperienceView setChangedView={setChangedView} />;
			case 3:
				return <EducationView setChangedView={setChangedView} />;
			case 4:
				return <SkillsView setChangedView={setChangedView} />;
			case 5:
			case 6:
				return <ProjectsView selectedFilter={selectedFilter} setChangedView={setChangedView} />;
			default:
				return <></>;
		}
	};

	return (
		<>
			<animated.div
				className="view-container"
				style={{
					opacity: x.to({ range: [0, 1], output: [0, 1] })
				}}
			>
				<Canvas mode="concurrent" camera={{ position: journeyStep.cameraPosition, zoom: 1.5 }}>
					<Suspense fallback={null}>
						{journeyStep.step < 2 && <StarsCube enableFalling={true} />}
						<Stars radius={10} depth={100} count={5000} factor={4} saturation={1} fade />
						<ContextBridge>
							<Html position={journeyStep.titlePosition} center style={{ textAlign: "center" }}>
								<Typography sx={breakpointsCard} className="step-title-top" variant="h2">
									{journeyStep.key === "Projects" && (
										<Select
											value={selectedFilter}
											onChange={handleSelectedChange}
											variant="standard"
											renderValue={(selected) => (
												<Typography className="step-title-select" variant="h2">
													{selected}
												</Typography>
											)}
											className={classes.select}
											inputProps={{
												classes: {
													icon: classes.icon
												}
											}}
											MenuProps={{
												classes: { paper: classes.menuPaper, list: classes.menuList }
											}}
											style={{ pointerEvents: "auto", userSelect: "auto" }}
										>
											{projectFilters.map((item: string) => (
												<MenuItem key={item} value={item} classes={{ selected: classes.selectItem }}>
													<Typography className="step-title-select" variant="h4">
														{item}
													</Typography>
												</MenuItem>
											))}
										</Select>
									)}

									{journeyStep.title}
								</Typography>
							</Html>
							{stepController()}
						</ContextBridge>
					</Suspense>
				</Canvas>
			</animated.div>
		</>
	);
}

export default CanvasView;
