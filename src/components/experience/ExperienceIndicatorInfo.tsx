import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Palette from "../../utils/Palette";
import { DialogTitleProps } from "../../utils/types";

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
						{jobItem.dateFrom} - {jobItem.dateTo ? jobItem.dateTo : <AllInclusiveIcon style={{ marginBottom: -6 }} />}
					</Typography>
					<Typography style={{ marginLeft: "auto", marginRight: 8 }}>{jobItem.companyTitle}</Typography>
				</DialogActions>
			</BootstrapDialog>
		</Palette>
	);
}

export default ExperienceIndicatorInfo;
