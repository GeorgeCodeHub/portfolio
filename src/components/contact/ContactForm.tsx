import React from "react";

import { useForm, Controller } from "react-hook-form";

import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Palette from "../../utils/Palette";

import "./Contact.scss";

const breakpointsCard = {
	width: {
		xs: 220, // theme.breakpoints.up('xxs')
		sm: 280, // theme.breakpoints.up('sm')
		md: 650, // theme.breakpoints.up('md')
		lg: 720, // theme.breakpoints.up('lg')
		xl: 750 // theme.breakpoints.up('xl')
	}
};

const defaultValues = {
	Name: "",
	Email: "",
	Message: ""
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2)
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1)
	}
}));

function ContactForm({ isOpen, onContactBackDropClick }: { isOpen: boolean; onContactBackDropClick: () => void }) {
	const {
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({ defaultValues });

	const onSocialMediaClick = (url: string | URL) => {
		window.open(url, "_blank");
	};

	return (
		<Palette>
			<BootstrapDialog
				aria-labelledby="Contact-dialog"
				open={isOpen}
				hideBackdrop={true}
				maxWidth={false}
				onBackdropClick={onContactBackDropClick}
				style={{ zIndex: 999999999 }}
			>
				<form
					onSubmit={handleSubmit((data) => {
						console.log(data);
					})}
				>
					<DialogContent className="contact-dialog-content" dividers sx={breakpointsCard}>
						<Box
							component="div"
							sx={{
								display: "flex",
								flexDirection: "column"
							}}
						>
							<div>
								I'm looking for opportunities to work as a Fullstack or Machine Learning engineer at the moment.
							</div>

							<Controller
								rules={{ required: true }}
								render={({ field }: any) => (
									<TextField
										{...field}
										id="name"
										label="Name"
										variant="outlined"
										margin="dense"
										error={errors?.Name}
										helperText={errors?.Name ? "No name was given" : ""}
									/>
								)}
								name="Name"
								control={control}
							/>
							<Controller
								rules={{ required: true, pattern: /^\S+@\S+$/i }}
								render={({ field }: any) => (
									<TextField
										{...field}
										id="email"
										label="Email"
										variant="outlined"
										margin="dense"
										error={errors?.Email}
										helperText={errors?.Email ? "Invalidate e-mail" : ""}
									/>
								)}
								name="Email"
								control={control}
							/>
							<Controller
								rules={{ required: true }}
								render={({ field }: any) => (
									<TextField
										{...field}
										id="message"
										label="Message"
										variant="outlined"
										margin="dense"
										multiline
										minRows={6}
										maxRows={8}
										error={errors?.Message}
										helperText={errors?.Message ? "No message was given" : ""}
									/>
								)}
								name="Message"
								control={control}
							/>
							<div>
								Currently the messaging tool is offline due to being under construction. Please contact me through the
								social media available below.
							</div>
						</Box>
					</DialogContent>
					<DialogActions className="contact-dialog-actions">
						<div style={{ marginRight: "auto", marginLeft: 16 }}>
							<IconButton
								className="contact-social-media"
								color="primary"
								onClick={() => onSocialMediaClick("https://twitter.com/ge_karampelas")}
							>
								<TwitterIcon style={{ color: "#FFF" }} />
							</IconButton>
							<IconButton
								className="contact-social-media"
								color="primary"
								onClick={() => onSocialMediaClick("https://github.com/GeorgeCodeHub")}
							>
								<GitHubIcon style={{ color: "#FFF" }} />
							</IconButton>
							<IconButton
								className="contact-social-media"
								color="primary"
								onClick={() => onSocialMediaClick("https://www.linkedin.com/in/george-karampelas-453598137/")}
							>
								<LinkedInIcon style={{ color: "#FFF" }} />
							</IconButton>
						</div>
						<div style={{ marginLeft: "auto", marginRight: 16 }}>
							<Tooltip title="Feature currently unavailable" placement="top" arrow>
								<Button type="submit" variant="contained" disabled={true}>
									SEND
								</Button>
							</Tooltip>
						</div>
					</DialogActions>
				</form>
			</BootstrapDialog>
		</Palette>
	);
}

export default ContactForm;
