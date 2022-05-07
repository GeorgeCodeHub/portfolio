import React from "react";

import { DialogTitleProps } from "../../utils/types";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import GitHubIcon from "@mui/icons-material/GitHub";

import Carousel from "react-material-ui-carousel";

import Palette from "../../utils/Palette";

const breakpointsCard = {
	maxWidth: {
		xs: "100vw", // theme.breakpoints.up('xxs')
		sm: "80vw", // theme.breakpoints.up('sm')
		md: "60vw", // theme.breakpoints.up('md')
		lg: "40vw", // theme.breakpoints.up('lg')
		xl: "35vw" // theme.breakpoints.up('xl')
	}
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2)
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1)
	}
}));

const BootstrapDialogTitle = (props: DialogTitleProps) => {
	const { itemData, onClose, ...other } = props;

	return (
		<div className="project-dialog-title" {...other}>
			<Carousel
				navButtonsProps={{
					style: {
						background: "#4FBDBA"
					}
				}}
				autoPlay={true}
				indicators={false}
				swipe={true}
				cycleNavigation={true}
				navButtonsAlwaysVisible={true}
				fullHeightHover={true}
				animation="slide"
				duration={500}
				height={250}
			>
				{itemData.images.map((item: string, key: string) => (
					<img key={key} width="100%" src={item} alt={key} />
				))}
			</Carousel>
			<h3 style={{ paddingLeft: 16 }}>{itemData.title}</h3>

			{onClose ? (
				<IconButton
					aria-label="close"
					size="small"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: "white"
					}}
					style={{ zIndex: 5 }}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</div>
	);
};

function ProjectInfo({ handleClose, open, itemData }: { handleClose: () => void; open: boolean; itemData: any }) {
	const onWorkingAppRedirect = () => {
		window.open(itemData.runningAppURL, "_blank");
	};

	const onGithubRedirect = () => {
		window.open(itemData.githubURL, "_blank");
	};

	return (
		<Palette>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				maxWidth={false}
				style={{ zIndex: 99999999 }}
			>
				<BootstrapDialogTitle id="customized-dialog-title" itemData={itemData} onClose={handleClose} />
				<DialogContent className="project-dialog-content" dividers sx={breakpointsCard}>
					<Typography gutterBottom>{itemData.description}</Typography>
				</DialogContent>
				<DialogActions className="project-dialog-actions">
					<div style={{ marginRight: "auto" }}>
						{itemData.runningAppURL ? (
							<IconButton
								style={{ border: "1px solid" }}
								aria-label="Redirect"
								color="primary"
								onClick={onWorkingAppRedirect}
							>
								<ExitToAppIcon style={{ color: "#FFF" }} />
							</IconButton>
						) : null}
						{itemData.githubURL ? (
							<IconButton
								style={{ border: "1px solid" }}
								aria-label="Github"
								color="primary"
								onClick={onGithubRedirect}
							>
								<GitHubIcon style={{ color: "#FFF" }} />
							</IconButton>
						) : null}
					</div>
					<Stack direction="row" spacing={1}>
						{itemData.technologies.map((item: string, index: number) => (
							<Chip key={index} label={item} color="primary" />
						))}
					</Stack>
				</DialogActions>
			</BootstrapDialog>
		</Palette>
	);
}

export default ProjectInfo;
