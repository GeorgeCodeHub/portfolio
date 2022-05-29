import React from "react";

import Typography from "@mui/material/Typography";
import Grow from "@mui/material/Grow";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";

import { Html } from "@react-three/drei";

import Palette from "../utils/Palette";

const breakpointsCard = {
	width: {
		xs: 200, // theme.breakpoints.up('xxs')
		sm: 380, // theme.breakpoints.up('sm')
		md: 600, // theme.breakpoints.up('md')
		lg: 600, // theme.breakpoints.up('lg')
		xl: 650 // theme.breakpoints.up('xl')
	}
};

function LoadingPanel() {
	return (
		<Html position={[0, 0, 0]} center style={{ width: "100vw" }}>
			<Palette>
				<Grow in={true}>
					<Card sx={breakpointsCard} variant="outlined" style={{ marginLeft: "auto", marginRight: "auto" }}>
						<CardContent>
							<Typography variant="subtitle1" gutterBottom style={{ margin: 16, textAlign: "center" }}>
								SEARCHING THE UNIVERSE. PLEASE WAIT...
								<br />
								<CircularProgress />
							</Typography>
						</CardContent>
					</Card>
				</Grow>
			</Palette>
		</Html>
	);
}

export default LoadingPanel;
