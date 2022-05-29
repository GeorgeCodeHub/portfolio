import React, { useState } from "react";

import { format } from "date-fns";

import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Grid from "@mui/material/Grid";
import Grow from "@mui/material/Grow";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { Html } from "@react-three/drei";

import Palette from "../../utils/Palette";
import { datePatterns } from "../../utils/consts";

const breakpointsCardWindows = {
	width: {
		xs: "85vw", // theme.breakpoints.up('xxs')
		sm: "85vw", // theme.breakpoints.up('sm')
		md: "75vw", // theme.breakpoints.up('md')
		lg: "60vw", // theme.breakpoints.up('lg')
		xl: "45vw" // theme.breakpoints.up('xl')
	}
};

export const DegreesListComponent = ({
	list
}: {
	list: {
		title: string;
		school: string;
		description: string;
		dateFrom: Date;
		dateTo: Date;
	}[];
}) => {
	const [occludeDegrees, setOccludeDegrees] = useState<boolean>();
	const [windowOpenDegrees, setWindowOpenDegrees] = useState(false);

	const onDegreesOcclude = (visible: boolean) => {
		setOccludeDegrees(visible);
		setWindowOpenDegrees(false);

		return null;
	};

	return (
		<Html
			position={[0, 0, 0]}
			scale={0.2}
			transform
			occlude
			onOcclude={onDegreesOcclude}
			//interpolate the visible state into css opacity and transforms
			style={{
				transition: "all 0.2s",
				opacity: occludeDegrees ? 0 : 1,
				transform: `scale(${occludeDegrees ? 0.25 : 1})`
			}}
		>
			<Palette>
				{windowOpenDegrees ? (
					<Grow in={windowOpenDegrees}>
						<Card variant="outlined" sx={breakpointsCardWindows}>
							<CardHeader
								title="DEGREES"
								action={
									<IconButton
										aria-label="close"
										component="span"
										onClick={() => {
											setWindowOpenDegrees(false);
										}}
									>
										<CloseIcon />
									</IconButton>
								}
								style={{ borderBottom: "1px solid #1D5560" }}
							/>

							<CardContent>
								<List
									sx={{
										width: "100%",
										overflow: "auto",
										maxHeight: 500
									}}
								>
									{list.map((item, index) => (
										<ListItem key={`item-${index}`}>
											<Card variant="outlined" sx={{ width: "100%" }}>
												<CardHeader
													title={
														<Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
															<Grid item>
																<b style={{ fontSize: 16 }}>{item.title}</b>
															</Grid>
															<Grid item>
																<b style={{ fontSize: 16 }}>{item.school}</b>
															</Grid>
														</Grid>
													}
													style={{ borderBottom: "1px solid #1D5560" }}
												/>

												<CardContent>
													<Typography>{item.description}</Typography>
												</CardContent>
												<CardActions style={{ background: "#3c5e61" }}>
													<Typography>
														{format(new Date(item.dateFrom), datePatterns.monthYear)} -{" "}
														{format(new Date(item.dateTo), datePatterns.monthYear)}
													</Typography>
												</CardActions>
											</Card>
										</ListItem>
									))}
								</List>
							</CardContent>
						</Card>
					</Grow>
				) : (
					<Fade in={!windowOpenDegrees}>
						<Button
							variant="contained"
							disableElevation
							onClick={() => {
								setWindowOpenDegrees(true);
							}}
						>
							DEGREES
						</Button>
					</Fade>
				)}
			</Palette>
		</Html>
	);
};

export const CertificateListComponent = ({
	list
}: {
	list: {
		title: string;
		school: string;
		description: string;
		dateAcquired: Date;
	}[];
}) => {
	const [occludeCerts, setOccludeCerts] = useState<boolean>();
	const [windowOpenCerts, setWindowOpenCerts] = useState(false);

	const onCertsOcclude = (visible: boolean) => {
		setOccludeCerts(visible);
		setWindowOpenCerts(false);
		return null;
	};

	return (
		<Html
			position={[0, 0, 0]}
			scale={0.2}
			transform
			occlude
			onOcclude={onCertsOcclude} //interpolate the visible state into css opacity and transforms
			style={{
				transition: "all 0.2s",
				opacity: occludeCerts ? 0 : 1,
				transform: `scale(${occludeCerts ? 0.25 : 1})`
			}}
		>
			<Palette>
				{windowOpenCerts ? (
					<Grow in={windowOpenCerts}>
						<Card variant="outlined" sx={breakpointsCardWindows}>
							<CardHeader
								title="CERTIFICATES"
								action={
									<IconButton
										aria-label="close"
										component="span"
										onClick={() => {
											setWindowOpenCerts(false);
										}}
									>
										<CloseIcon />
									</IconButton>
								}
								style={{ borderBottom: "1px solid #1D5560" }}
							/>
							<CardContent>
								<List
									sx={{
										width: "100%",
										overflow: "auto",
										maxHeight: 400
									}}
								>
									{list.map((item, index) => (
										<ListItem key={`item-${index}`}>
											<Card variant="outlined" sx={{ width: "100%" }}>
												<CardHeader
													title={
														<Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
															<Grid item>
																<b style={{ fontSize: 16 }}>{item.title}</b>
															</Grid>
															<Grid item>
																<b style={{ fontSize: 16 }}>{item.school}</b>
															</Grid>
														</Grid>
													}
													style={{ borderBottom: "1px solid #1D5560" }}
												/>

												<CardContent>
													<Typography>{item.description}</Typography>
												</CardContent>
												<CardActions style={{ background: "#3c5e61" }}>
													<Typography>{format(new Date(item.dateAcquired), datePatterns.monthYear)}</Typography>
												</CardActions>
											</Card>
										</ListItem>
									))}
								</List>
							</CardContent>
						</Card>
					</Grow>
				) : (
					<Fade in={!windowOpenCerts}>
						<Button
							variant="contained"
							disableElevation
							onClick={() => {
								setWindowOpenCerts(true);
							}}
						>
							CERTIFICATES
						</Button>
					</Fade>
				)}
			</Palette>
		</Html>
	);
};
