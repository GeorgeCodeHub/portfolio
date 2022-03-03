import React from "react";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2)
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1)
	}
}));

function ContactForm({ isOpen, onContactBackDropClick }: { isOpen: boolean; onContactBackDropClick: () => void }) {
	return (
		<BootstrapDialog
			aria-labelledby="Contact-dialog"
			open={isOpen}
			hideBackdrop={true}
			onBackdropClick={onContactBackDropClick}
		>
			<DialogContent dividers>
				<Box
					component="form"
					sx={{
						"& .MuiTextField-root": { m: 1, width: "55ch" }
					}}
					noValidate
					autoComplete="off"
				>
					<div>
						<TextField id="name" label="Name" variant="outlined" />
					</div>
					<div>
						<TextField id="email" label="E-mail" variant="outlined" />
					</div>
					<div>
						<TextField id="message" label="Message" multiline minRows={6} maxRows={8} />
					</div>
				</Box>
			</DialogContent>
			<DialogActions>
				<div style={{ marginRight: "auto", marginLeft: 16 }}>
					<IconButton color="primary">
						<TwitterIcon />
					</IconButton>
					<IconButton color="primary">
						<GitHubIcon />
					</IconButton>
					<IconButton color="primary">
						<LinkedInIcon />
					</IconButton>
				</div>
				<div style={{ marginLeft: "auto", marginRight: 16 }}>
					<Button variant="contained">SEND</Button>
				</div>
			</DialogActions>
		</BootstrapDialog>
	);
}

export default ContactForm;
