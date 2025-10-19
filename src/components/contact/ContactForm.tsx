import "./Contact.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Palette from "../../utils/Palette";

const breakpointsCard = {
	width: {
		xs: 220, // theme.breakpoints.up('xxs')
		sm: 280, // theme.breakpoints.up('sm')
		md: 650, // theme.breakpoints.up('md')
		lg: 720, // theme.breakpoints.up('lg')
		xl: 750 // theme.breakpoints.up('xl')
	}
};

const BootstrapDialog = styled(Dialog)(({ theme }: any) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2)
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1)
	}
}));

function ContactForm({ isOpen, onContactBackDropClick }: { isOpen: boolean; onContactBackDropClick: () => void }) {
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
				<DialogContent className="contact-dialog-content" dividers sx={breakpointsCard}>
					<Box component="div" style={{ display: "flex", flexDirection: "column", rowGap: 8 }}>
						<div>If you made it this far you have reached the end of the journey.</div>
						<div>I hope you liked exploring the universe as much as I did when I first discovered it.</div>
						<div>Feel free to reach out if you have any questions or just want to chat!</div>
						<div>
							This was your captain <strong>George</strong> signing off.
						</div>

						<Grid container spacing={2} style={{ marginTop: 8 }}>
							<Grid item xs={12} sm={6}>
								<Card variant="outlined" style={{ background: "transparent" }}>
									<CardActionArea
										onClick={() => onSocialMediaClick("https://github.com/GeorgeCodeHub")}
										aria-label="Open George's GitHub profile"
									>
										<CardContent>
											<div style={{ display: "flex", alignItems: "center", columnGap: 8 }}>
												<GitHubIcon fontSize="large" color="primary" />
												<div>
													<Typography variant="h6">GitHub</Typography>
													<Typography variant="body2" color="text.secondary">
														See my projects and code
													</Typography>
												</div>
											</div>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>

							<Grid item xs={12} sm={6}>
								<Card variant="outlined" style={{ background: "transparent" }}>
									<CardActionArea
										onClick={() => onSocialMediaClick("https://www.linkedin.com/in/george-karampelas-453598137/")}
										aria-label="Open George's LinkedIn profile"
									>
										<CardContent>
											<div style={{ display: "flex", alignItems: "center", columnGap: 8 }}>
												<LinkedInIcon fontSize="large" color="primary" />
												<div>
													<Typography variant="h6">LinkedIn</Typography>
													<Typography variant="body2" color="text.secondary">
														Connect and say hello
													</Typography>
												</div>
											</div>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						</Grid>
					</Box>
				</DialogContent>
			</BootstrapDialog>
		</Palette>
	);
}

export default ContactForm;
