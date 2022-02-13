import React, { useState } from "react";

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
	const [value, setValue] = useState(0);
	const classes = useStyles();

	const handleChange = (event: React.SyntheticEvent, newValue: React.SetStateAction<number>) => {
		setValue(newValue);
	};

	return (
		<Grid container justifyContent="center" spacing={0} style={{ position: "fixed", bottom: 0, width: "100%" }}>
			<Grid item style={{ width: 80 }}>
				<div className="navbar-triangle-left" />
			</Grid>
			<Grid item>
				<BottomNavigation
					sx={{ width: "100%" }}
					value={value}
					onChange={handleChange}
					showLabels={false}
					style={{ width: "100%" }}
				>
					<Tooltip title="Home">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value={0}
							icon={<HomeIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="About">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value={1}
							icon={<PersonIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Experience">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value={2}
							icon={<AutoGraphIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Projects">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value={3}
							icon={<IntegrationInstructionsIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Skills">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value={4}
							icon={<BarChartIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Education">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value={5}
							icon={<SchoolIcon style={{ paddingBottom: 6 }} />}
						/>
					</Tooltip>
					<Tooltip title="Contact">
						<BottomNavigationAction
							classes={{ root: classes.root }}
							value={6}
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
