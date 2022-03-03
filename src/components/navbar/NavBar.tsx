import React from "react";

import { JourneyStepsContext } from "../../App";

import Grid from "@mui/material/Grid";
import BottomNavigation from "@mui/material/BottomNavigation";
import Tooltip from "@mui/material/Tooltip";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { makeStyles } from "@mui/styles";

import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import BarChartIcon from "@mui/icons-material/BarChart";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const useStyles = makeStyles(() => ({
	root: {
		minWidth: 50,
		maxWidth: 90,
		borderTop: "1px solid"
	}
}));

function NavBar() {
	const classes = useStyles();

	const { journeyStep, dispatchJourneyStep } = React.useContext(JourneyStepsContext);

	const onNavBarChange = (event: React.SyntheticEvent, newValue: React.SetStateAction<number>) => {
		dispatchJourneyStep({ type: newValue });
	};
	return (
		<Grid
			container
			justifyContent="center"
			spacing={0}
			style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 20000 }}
		>
			<Grid item style={{ width: 80 }}>
				<div className="navbar-triangle-left" />
			</Grid>
			<Grid item>
				<BottomNavigation
					sx={{ width: "100%" }}
					value={journeyStep.key}
					onChange={onNavBarChange}
					showLabels={false}
					style={{ width: "100%" }}
				>
					<Tooltip title="Home">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value="Home"
							icon={<HomeIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="About">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value="About"
							icon={<PersonIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Experience">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value="Experience"
							icon={<AutoGraphIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Education">
						<BottomNavigationAction
							classes={{ root: classes.root }}
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
					<Tooltip title="Resume">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value={7}
							icon={<InsertDriveFileIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
				</BottomNavigation>
			</Grid>
			<Grid item style={{ width: 80 }}>
				<div className="navbar-triangle-right" />
			</Grid>
		</Grid>
	);
}

export default NavBar;
