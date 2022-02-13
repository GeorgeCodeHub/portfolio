import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

function HomeView() {
	return (
		<div className="view-container">
			<Grid container direction="column" justifyContent="space-around" alignItems="center" style={{ height: "100%" }}>
				<Grid item xs={4} style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
					<Typography variant="h2">WELCOME TRAVELLER</Typography>
				</Grid>
				<Grid item xs={8}>
					<Card variant="outlined">
						<CardHeader style={{ textAlign: "left", borderBottom: "1px solid" }} title="MESSAGE FROM YOUR CAPTAIN" />
						<CardContent>
							<Typography variant="subtitle1" gutterBottom style={{ margin: 32, textAlign: "center" }}>
								Hello, I am <b>George Karampelas</b>,
								<br />a full stack web engineer and machine learning practitioner.
							</Typography>
						</CardContent>
						<CardActions style={{ justifyContent: "center" }}>
							<Button variant="contained" disableElevation>
								Continue
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}

export default HomeView;
