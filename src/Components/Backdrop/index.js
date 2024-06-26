import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const BackdropLoading = ({ open, handleClose }) => {
	return (
		<div>
			<Backdrop
				sx={{
					color: "#fff",
					zIndex: (theme) => theme.zIndex.drawer + 1,
				}}
				open={open}
				onClick={handleClose}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
		</div>
	);
};

export default BackdropLoading;
