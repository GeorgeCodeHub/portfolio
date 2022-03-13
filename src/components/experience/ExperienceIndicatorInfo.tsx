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
		<DialogTitle className="dialog-title" sx={{ m: 0, p: 2 }} {...other}>
			{children}
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
	return (
		<Palette>
			<BootstrapDialog aria-labelledby="Contact-dialog" open={isIndicatorSelected} onBackdropClick={onCloseInfo}>
				<BootstrapDialogTitle id="customized-dialog-title" onClose={onCloseInfo}>
					{jobItem.title}
				</BootstrapDialogTitle>
				<DialogContent className="dialog-content" dividers>
					<Typography gutterBottom>{jobItem.description}</Typography>
				</DialogContent>
				<DialogActions className="dialog-actions">
					<Typography style={{ marginRight: "auto", marginLeft: 8, fontWeight: 500 }}>
						{format(new Date(jobItem.dateFrom), datePatterns.monthYear)} -{" "}
						{format(new Date(jobItem.dateTo), datePatterns.monthYear)}
					</Typography>
				</DialogActions>
			</BootstrapDialog>
		</Palette>
	);
}

export default ExperienceIndicatorInfo;
