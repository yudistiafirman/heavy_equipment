import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import HSpacer from "../HSpacer";
import HDetailText from "../HDetailText";
import { Box } from "@mui/material";

const BASE_URL =
	process.env.NODE_ENV === "production"
		? process.env.REACT_APP_API_URL_PROD
		: process.env.REACT_APP_API_URL_DEV;

const CertificateDialog = ({
	open,
	handleClose,
	participantImage,
	participantName,
	participantNis,
	participantCertificateNumber,
	participantBatch,
	participantTraining,
}) => {
	return (
		<Dialog fullWidth open={open} onClose={handleClose}>
			<DialogContent>
				<Box sx={{ display: "flex", flexDirection: "row" }}>
					<img
						style={{
							borderRadius: "5px",
							border: "1px solid var(--light-grey)",
						}}
						width="50%"
						height={400}
						src={`${BASE_URL}/${participantImage}`}
						loading="lazy"
						alt="#"
					/>
					<HSpacer size="extraLarge" />
					<Box>
						<HDetailText
							title="Nama Peserta"
							detail={participantName}
						/>
						<HSpacer size="large" />
						<HDetailText
							title="NIS Peserta"
							detail={participantNis}
						/>
						<HSpacer size="large" />
						<HDetailText
							title="No Sertifikat"
							detail={participantCertificateNumber}
						/>
						<HSpacer size="large" />
						<HDetailText title="Batch" detail={participantBatch} />
						<HSpacer size="large" />
						<HDetailText
							title="Pelatihan"
							detail={participantTraining}
						/>
					</Box>
				</Box>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Tutup</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CertificateDialog;
