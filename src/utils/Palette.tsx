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
	}
});

export default function Palette({
	children
}: {
	children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined;
}) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
