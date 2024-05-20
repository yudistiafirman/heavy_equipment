import { Typography } from "@mui/material";
import React from "react";

const HDetailText = ({ title, detail }) => {
	return (
		<>
			<Typography
				sx={{ fontWeight: "500", color: "#7a9e9f" }}
				component="h2"
				variant="subtitle1"
			>
				{title}
			</Typography>
			<Typography
				sx={{ fontWeight: "500", color: "#202020)" }}
				component="h2"
				variant="subtitle1"
			>
				{detail}
			</Typography>
		</>
	);
};

export default HDetailText;
