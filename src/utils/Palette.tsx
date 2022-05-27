import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#4FBDBA",
			contrastText: "#ffffff"
		},
		secondary: {
			main: "#f50057"
		},
		background: {
			paper: "#072227"
		},
		divider: "#1D5560"
	},
	breakpoints: {
		values: {
			xs: 200, // phone
			sm: 380, // tablets
			md: 768, // small laptop
			lg: 1200, // desktop
			xl: 1536 // large screens
		}
	}
});

export default function Palette({
	children
}: {
	children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
