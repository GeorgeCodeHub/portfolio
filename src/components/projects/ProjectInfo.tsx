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
	const { children, onClose, ...other } = props;

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
			>
				<img
					width="100%"
					height={250}
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
					alt="1"
				/>
				<img
					width="100%"
					height={250}
					src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
					alt="2"
				/>
				<img
					width="100%"
					height={250}
					src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
					alt="3"
				/>
			</Carousel>
			<h3 style={{ paddingLeft: 16 }}>{children}</h3>

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
				<BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
					{itemData.title}
				</BootstrapDialogTitle>
				<DialogContent className="project-dialog-content" dividers sx={breakpointsCard}>
					<Typography gutterBottom>{itemData.description}</Typography>
				</DialogContent>
				<DialogActions className="project-dialog-actions">
					<div style={{ marginRight: "auto" }}>
						{itemData.runningAppURL ? (
							<IconButton aria-label="Redirect" color="primary" onClick={onWorkingAppRedirect}>
								<ExitToAppIcon />
							</IconButton>
						) : null}
						{itemData.githubURL ? (
							<IconButton aria-label="Github" color="primary" onClick={onGithubRedirect}>
								<GitHubIcon />
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
