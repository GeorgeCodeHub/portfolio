import React from "react";

import { JourneyStepsContext } from "../../App";

import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import BottomNavigation from "@mui/material/BottomNavigation";
import Tooltip from "@mui/material/Tooltip";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import IconButton from "@mui/material/IconButton";

import { makeStyles } from "@mui/styles";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

import "./Navbar.scss";

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
		<Grid
			container
			justifyContent="center"
			spacing={0}
			style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 50000000 }}
		>
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
					<Tooltip title="Home">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							sx={breakpointsButtons}
							value="Home"
							icon={<HomeIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="About">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							sx={breakpointsButtons}
							value="About"
							icon={<PersonIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Experience">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							sx={breakpointsButtons}
							value="Experience"
							icon={<AutoGraphIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Education">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							sx={breakpointsButtons}
							value="Education"
							icon={<SchoolIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Skills">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value="Skills"
							icon={<BarChartIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Projects">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value="Projects"
							icon={<IntegrationInstructionsIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Contact">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value="Contact"
							icon={<EmailIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
				</BottomNavigation>
			</Grid>
			<Grid className="resume-button-container">
				<Tooltip title="Resume">
					<IconButton
						classes={{ root: classes.root }}
						color="primary"
						aria-label="delete"
						style={{ borderRadius: 0, borderLeft: "1px solid" }}
					>
						<InsertDriveFileIcon style={{ paddingBottom: 0 }} />
					</IconButton>
				</Tooltip>
			</Grid>
			<Grid item sx={breakpointsNavBarTriangles}>
				<div className="navbar-triangle-right" />
			</Grid>
		</Grid>
	);
}

export default NavBar;
