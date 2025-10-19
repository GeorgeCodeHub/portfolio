import "./Navbar.scss";

import React from "react";

import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import BarChartIcon from "@mui/icons-material/BarChart";
import CodeIcon from "@mui/icons-material/Code";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles } from "@mui/styles";
import { JourneyStepsContext } from "../../App";

const onResumeButton = () => {
	window.open("https://drive.google.com/file/d/11-GkAqhYuh1uAuOoLcuUD71gTE_6suq9/view", "_blank");
};

const breakpointsNavBarTriangles = {
	width: {
		xs: 10, // theme.breakpoints.up('xxs')
		sm: 30, // theme.breakpoints.up('sm')
		md: 60, // theme.breakpoints.up('md')
		lg: 80, // theme.breakpoints.up('lg')
		xl: 80 // theme.breakpoints.up('xl')
	}
};

const breakpointsButtons = {
	width: {
		xs: 30, // theme.breakpoints.up('xxs')
		md: 50, // theme.breakpoints.up('md')
		lg: 70, // theme.breakpoints.up('lg')
		xl: 90 // theme.breakpoints.up('xl')
	}
};

const useStyles = makeStyles(({ breakpoints }: any) => ({
	root: {
		minWidth: "20px !important",
		maxWidth: 90
	},
	tooltip: {
		fontSize: "2em"
	}
}));

function NavBar() {
	const isScreenMobile = useMediaQuery("(max-width:500px)");

	const classes = useStyles();

	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	const onNavBarChange = (event: React.SyntheticEvent, newValue: React.SetStateAction<number>) => {
		dispatchJourneyStep({ type: newValue, payload: isScreenMobile });
	};


	return (
		<Grid container spacing={2} style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 50000000 }}>
			{journeyStep.step === 3 || journeyStep.step === 5 ? (
				<Grid item xs={12} style={{ textAlign: "center", marginBottom: 24 }}>
					<ThreeSixtyIcon fontSize="large" style={{ color: "white" }} />
					<div style={{ color: "white" }}>You can look around here</div>
				</Grid>
			) : (
				<></>
			)}
			<Grid item xs={12}>
				<Grid container justifyContent="center" spacing={0}>
					<Grid item sx={breakpointsNavBarTriangles}>
						<div className="navbar-triangle-left" />
					</Grid>
					<Grid item style={{ borderTop: "1px solid #1d5560" }}>
						<BottomNavigation
							sx={{ width: "100%" }}
							value={journeyStep.step}
							onChange={onNavBarChange}
							style={{ width: "100%" }}
						>
							<Tooltip title="Home" classes={{ tooltip: classes.tooltip }}>
								<BottomNavigationAction
									classes={{ root: classes.root }}
									sx={breakpointsButtons}
									value="Home"
									icon={<HomeIcon style={{ paddingBottom: 6 }} />}
								/>
							</Tooltip>

								<Tooltip title="About" classes={{ tooltip: classes.tooltip }}>
									<BottomNavigationAction
										classes={{ root: classes.root }}
										sx={breakpointsButtons}
										value="About"
										icon={<PersonIcon style={{ paddingBottom: 6 }} />}
									/>
								</Tooltip>
			
								<Tooltip title="Experience" classes={{ tooltip: classes.tooltip }}>
									<BottomNavigationAction
										classes={{ root: classes.root }}
										sx={breakpointsButtons}
										value="Experience"
										icon={<AutoGraphIcon style={{ paddingBottom: 6 }} />}
									/>
								</Tooltip>
								<Tooltip title="Education" classes={{ tooltip: classes.tooltip }}>
									<BottomNavigationAction
										classes={{ root: classes.root }}
										sx={breakpointsButtons}
										value="Education"
										icon={<SchoolIcon style={{ paddingBottom: 6 }} />}
									/>
								</Tooltip>
								<Tooltip title="Skills" classes={{ tooltip: classes.tooltip }}>
									<BottomNavigationAction
										classes={{ root: classes.root }}
										value="Skills"
										icon={<BarChartIcon style={{ paddingBottom: 6 }} />}
									/>
								</Tooltip>
								<Tooltip title="Projects" classes={{ tooltip: classes.tooltip }}>
									<BottomNavigationAction
										classes={{ root: classes.root }}
										value="Projects"
										icon={<CodeIcon style={{ paddingBottom: 6 }} />}
									/>
								</Tooltip>
								<Tooltip title="Contact" classes={{ tooltip: classes.tooltip }}>
									<BottomNavigationAction
										classes={{ root: classes.root }}
										value="Contact"
										icon={<EmailIcon style={{ paddingBottom: 6 }} />}
									/>
								</Tooltip>
						</BottomNavigation>
					</Grid>
					<Grid className="resume-button-container">
						<Tooltip title="Resume" classes={{ tooltip: classes.tooltip }}>
							<IconButton
								classes={{ root: classes.root }}
								style={{ borderRadius: 0, borderLeft: "1px solid" }}
								color="primary"
								aria-label="delete"
								onClick={onResumeButton}
							>
								<InsertDriveFileIcon style={{ paddingBottom: 0 }} />
							</IconButton>
						</Tooltip>
					</Grid>
					<Grid item sx={breakpointsNavBarTriangles}>
						<div className="navbar-triangle-right" />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default NavBar;
