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
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { Html } from "@react-three/drei";

import { datePatterns } from "../../utils/consts";

export const DegreesListComponent = ({
	list
}: {
	list: {
		title: string;
		school: string;
		description: string;
		dateStart: Date;
		dateEnd: Date;
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
			position={[1.2, 0, 0]}
			scale={0.2}
			rotation={[0, Math.PI / 2, 0]}
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
			{windowOpenDegrees ? (
				<Card variant="outlined" sx={{ maxWidth: 700 }}>
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
						style={{ borderBottom: "1px solid" }}
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
											style={{ borderBottom: "1px solid #1E2427" }}
										/>

										<CardContent>
											<Typography>{item.description}</Typography>
										</CardContent>
										<CardActions style={{ background: "#EEEEEE" }}>
											<Typography>
												{format(item.dateStart, datePatterns.monthYear)} -{" "}
												{format(item.dateEnd, datePatterns.monthYear)}
											</Typography>
										</CardActions>
									</Card>
								</ListItem>
							))}
						</List>
					</CardContent>
				</Card>
			) : (
				<Button
					variant="contained"
					disableElevation
					onClick={() => {
						setWindowOpenDegrees(true);
					}}
				>
					DEGREES
				</Button>
			)}
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
			position={[-1.2, 0, 0]}
			scale={0.2}
			rotation={[0, -Math.PI / 2, 0]}
			transform
			occlude
			onOcclude={onCertsOcclude} //interpolate the visible state into css opacity and transforms
			style={{
				transition: "all 0.2s",
				opacity: occludeCerts ? 0 : 1,
				transform: `scale(${occludeCerts ? 0.25 : 1})`
			}}
		>
			{windowOpenCerts ? (
				<Card variant="outlined" sx={{ maxWidth: 600 }}>
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
						style={{ borderBottom: "1px solid" }}
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
											style={{ borderBottom: "1px solid #1E2427" }}
										/>

										<CardContent>
											<Typography>{item.description}</Typography>
										</CardContent>
										<CardActions style={{ background: "#EEEEEE" }}>
											<Typography>{format(item.dateAcquired, datePatterns.monthYear)}</Typography>
										</CardActions>
									</Card>
								</ListItem>
							))}
						</List>
					</CardContent>
				</Card>
			) : (
				<Button
					variant="contained"
					disableElevation
					onClick={() => {
						setWindowOpenCerts(true);
					}}
				>
					CERTIFICATES
				</Button>
			)}
		</Html>
	);
};
