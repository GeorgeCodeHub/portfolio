import React from "react";

import { format } from "date-fns";

import { DialogTitleProps } from "../../utils/types";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import CloseIcon from "@mui/icons-material/Close";

import Palette from "../../utils/Palette";
import { datePatterns } from "../../utils/consts";

const breakpointsCard = {
	maxWidth: {
		xs: "100vw", // theme.breakpoints.up('xxs')
		sm: "80vw", // theme.breakpoints.up('sm')
		md: "60vw", // theme.breakpoints.up('md')
		lg: "45vw", // theme.breakpoints.up('lg')
		xl: "40vw" // theme.breakpoints.up('xl')
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
		<DialogTitle className="dialog-title" sx={{ m: 0, p: 2 }} {...other}>
			{itemData.positionTitle}
			{onClose ? (
				<IconButton
					aria-label="close"
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: "white"
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

function ExperienceIndicatorInfo({
	isIndicatorSelected,
	onCloseInfo,
	jobItem
}: {
	isIndicatorSelected: boolean;
	onCloseInfo: () => void;
	jobItem: any;
}) {
	console.log(jobItem);

	return (
		<Palette>
			<BootstrapDialog
				aria-labelledby="Contact-dialog"
				open={isIndicatorSelected}
				onBackdropClick={onCloseInfo}
				maxWidth={false}
			>
				<BootstrapDialogTitle id="customized-dialog-title" itemData={jobItem} onClose={onCloseInfo} />

				<DialogContent className="dialog-content" dividers sx={breakpointsCard}>
					<Typography gutterBottom>{jobItem.description}</Typography>
				</DialogContent>
				<DialogActions className="dialog-actions">
					<Typography style={{ marginRight: "auto", marginLeft: 8, fontWeight: 500 }}>
						{format(new Date(jobItem.dateFrom), datePatterns.monthYear)} -{" "}
						{format(new Date(jobItem.dateTo), datePatterns.monthYear)}
					</Typography>
					<Typography style={{ marginLeft: "auto", marginRight: 8 }}>{jobItem.companyTitle}</Typography>
				</DialogActions>
			</BootstrapDialog>
		</Palette>
	);
}

export default ExperienceIndicatorInfo;
