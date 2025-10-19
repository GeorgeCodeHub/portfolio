import "./ErrorFallBack.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const breakpointsCard = {
	width: {
		xs: 250, // theme.breakpoints.up('xxs')
		sm: 380, // theme.breakpoints.up('sm')
		md: 500, // theme.breakpoints.up('md')
		lg: 550, // theme.breakpoints.up('lg')
		xl: 550 // theme.breakpoints.up('xl')
	}
};

function ErrorFallBackView({
	error,
	resetErrorBoundary
}: {
	error: any;
	resetErrorBoundary: (...args: Array<unknown>) => void;
}) {
	const onSocialMediaClick = (url: string | URL) => {
		window.open(url, "_blank");
	};

	return (
		<div className="error-container">
			<div className="stars" />
			<div className="stars2" />
			<div className="central-body">
				<Grow in={true}>
					<Box sx={breakpointsCard} component="span" style={{ color: "white", textAlign: "center" }}>
						<Typography variant="h2" gutterBottom>
							Hmmm...
						</Typography>
						<Typography variant="body1" gutterBottom>
							It looks like the app broke down.
						</Typography>
						<Typography variant="body1" gutterBottom>
							Your device's graphics card might be unable to load the elements. Try enabling{" "}
							<b style={{ color: "#4FBDBA" }}>Hardware Acceleration</b> on your browser and reload the page.
						</Typography>
						<br />
						<div style={{ display: "flex", justifyContent: "center" }}>
							<Button
								variant="contained"
								onClick={() => {
									window.location.reload();
								}}
							>
								RELOAD PAGE
							</Button>
						</div>
						<br />
						<Typography variant="body1" gutterBottom>
							If you return here again please try contacting me through the following methods:
						</Typography>
						<div style={{ display: "flex", justifyContent: "center" }}>
							<IconButton onClick={() => onSocialMediaClick("https://github.com/GeorgeCodeHub")}>
								<GitHubIcon color="primary" />
							</IconButton>
							<IconButton
								onClick={() => onSocialMediaClick("https://www.linkedin.com/in/george-karampelas-453598137/")}
							>
								<LinkedInIcon color="primary" />
							</IconButton>
						</div>
					</Box>
				</Grow>
			</div>
			<div className="objects">
				<img className="rocket" src={process.env.PUBLIC_URL + "/images/rocket.png"} alt="rocket" width="40px" />
				{/* <a href="https://www.flaticon.com/free-icons/space-shuttle" title="space shuttle icons">Space shuttle icons created by BZZRINCANTATION - Flaticon</a> */}
				<div className="earth-moon">
					<img className="earth" src={process.env.PUBLIC_URL + "/images/earth.png"} alt="earth" width="120px" />
					{/* <a href="https://www.flaticon.com/free-icons/planet" title="planet icons">Planet icons created by BZZRINCANTATION - Flaticon</a> */}
					<img className="moon" src={process.env.PUBLIC_URL + "/images/moon.png"} alt="moon" width="50px" />
					{/* <a href="https://www.flaticon.com/free-icons/miscellaneous" title="miscellaneous icons">Miscellaneous icons created by BZZRINCANTATION - Flaticon</a> */}
				</div>
				<div className="astronaut-container">
					<img
						className="astronaut-animation"
						src={process.env.PUBLIC_URL + "/images/astronaut.png"}
						alt="test"
						width="140px"
					/>
					{/* <a href="https://www.flaticon.com/free-icons/astronaut" title="astronaut icons">Astronaut icons created by BZZRINCANTATION - Flaticon</a> */}
				</div>
			</div>
		</div>
	);
}

export default ErrorFallBackView;
