import React, {
	useState,
	useContext,
	useLayoutEffect,
	useEffect,
	useCallback,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HecLogo from "./assets/hec.png";
import MenuList from "./MenuList";
import "./Navbar.css";
import NavbarEmailInfo from "./NavbarEmailInfo";
import NavbarPhoneInfo from "./NavbarPhoneInfo";
import TentangHec from "../TentangHec/TentangHec";
import PelayananKami from "../PelayananKami/PelayananKami";
import { FaBars, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import { MenuContext } from "react-flexible-sliding-menu";
import Fb from "./assets/facebook.png";
import Yt from "./assets/youtube.png";
import Linkedin from "./assets/linkedin.png";
import Instagram from "./assets/instagram.png";
import SearchIcon from "@mui/icons-material/Search";
import { Button, InputAdornment, TextField } from "@mui/material";
import { useBackdropStore } from "../../store/useBackdropStore";
import { useSnackBarStore } from "../../store/useSnackbarStore";
import { searchCertificate } from "../../AsyncActions/certficateActions";
import CertificateDialog from "../Dialog/CertificateDialog";
function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

const Navbar = () => {
	const [isIdPressed, SetIsIdPress] = useState(true);
	const [tentangKami, SetTentangKami] = useState(false);
	const [pelayanKami, SetPelayanKami] = useState(false);
	const { openMenu, closeMenu } = useContext(MenuContext);

	const [openCertificateDialog, setOpenCertificateDialog] = useState(false);

	const [certificateNumber, setCertificateNumber] = useState("");
	const [certificateData, setCertificateData] = useState(null);
	const [width, height] = useWindowSize();
	const [setBackdrop] = useBackdropStore((state) => [state.setBackdrop]);
	const [setOpenSnackbar] = useSnackBarStore((state) => [
		state.setOpenSnackbar,
	]);

	const onLeaveNav = () => {
		SetTentangKami(false);
		SetPelayanKami(false);
	};

	useEffect(() => {
		if (width >= 969) {
			closeMenu();
		}
	}, [width]);

	const handleSlide = () => {
		openMenu();
	};

	const onSearchCertificate = async () => {
		try {
			setBackdrop(true);
			if (certificateNumber.length === 0) {
				setBackdrop(false);
				setOpenSnackbar({
					openSnackbar: true,
					type: "error",
					message: "Masukan No Sertifikat",
				});
			} else if (
				certificateNumber.length > 0 &&
				certificateNumber.length < 5
			) {
				setBackdrop(false);
				setOpenSnackbar({
					openSnackbar: true,
					type: "error",
					message: "No Sertifikat tidak boleh kurang dari 5 karakter",
				});
			} else {
				const response = await searchCertificate(certificateNumber);
				if (response.data.success) {
					setBackdrop(false);
					setOpenSnackbar({
						openSnackbar: true,
						type: "success",
						message: "Sertifkat Peserta Berhasil Ditemukan",
					});
					setCertificateData(response.data.data);
					setCertificateNumber("");
					setOpenCertificateDialog(true);
				}
			}
		} catch (error) {
			setBackdrop(false);
			setOpenSnackbar({
				openSnackbar: true,
				type: "error",
				message:
					error?.response?.data?.message ?? "Something went wrong",
			});
		}
	};

	return (
		<div className="navbar">
			<div className="header">
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<FaBars
						size="large"
						className="hamburgerMenu"
						onClick={handleSlide}
						color="#000000"
					/>
					<img src={HecLogo} className="imageLogo" />
				</div>
				<div className="searchFieldContainer">
					<TextField
						id="standard-start-adornment"
						placeholder="No Sertifikat"
						value={certificateNumber}
						onChange={(e) => setCertificateNumber(e.target.value)}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
						}}
						variant="outlined"
					/>
					<div style={{ margin: "8px" }} />
					<Button onClick={onSearchCertificate} variant="outlined">
						Cari
					</Button>
				</div>

				<div className="navbarInfoContainer">
					<div className="contactInformation">
						<div className="callMe">Hubungi Sekarang</div>
						<div className="phoneAndEmail">
							<NavbarPhoneInfo />
							<NavbarEmailInfo />
						</div>
					</div>

					<div className="contactSeparator" />
					<div style={{ height: "100px", alignSelf: "center" }}>
						<div className="transBtn">
							<span
								onClick={() => SetIsIdPress(!isIdPressed)}
								style={{
									backgroundColor: isIdPressed
										? "#071243"
										: "#ffffff",
									color: isIdPressed ? "#ffffff" : "#071243",
								}}
								className="translate"
							>
								ID
							</span>
							<span
								onClick={() => SetIsIdPress(!isIdPressed)}
								style={{
									backgroundColor: isIdPressed
										? "#ffffff"
										: "#071243",
									color: isIdPressed ? "#071243" : "#ffffff",
								}}
								className="translate"
							>
								EN
							</span>
						</div>
						<div className="socialMedia">
							<img
								alt="#"
								src={Linkedin}
								style={{
									width: "16px",
									height: "16px",
									marginRight: "14px",
								}}
							/>
							<img
								alt="#"
								src={Yt}
								style={{
									width: "23px",
									height: "16px",
									marginRight: "14px",
								}}
							/>
							<img
								alt="#"
								onClick={() =>
									(window.location =
										"https://www.instagram.com/heavyequipmentcentre")
								}
								src={Instagram}
								style={{
									width: "16px",
									height: "16px",
									marginRight: "14px",
									cursor: "pointer",
								}}
							/>
							<img
								alt="#"
								onClick={() =>
									(window.location =
										"https://www.facebook.com/profile.php?id=100075861904489")
								}
								src={Fb}
								style={{
									width: "16px",
									height: "16px",
									cursor: "pointer",
								}}
							/>
						</div>
					</div>
				</div>
				<div className="mobileInfoContainer">
					<a style={{ marginRight: "21px" }} href="tel:+68112131122">
						<FaPhoneAlt color="#000000" />
					</a>
					<a href="mailto:hequipmentcentre@gmail.com">
						<FaRegEnvelope color="#000000" />
					</a>
				</div>
			</div>
			<nav onMouseLeave={onLeaveNav} className="navigation">
				<MenuList
					onPressDropDownPelayanan={SetPelayanKami}
					onPressDropDownTentang={SetTentangKami}
				/>
			</nav>
			{tentangKami && (
				<TentangHec onPressDropDownTentang={SetTentangKami} />
			)}
			{pelayanKami && (
				<PelayananKami onPressDropDownPelayanan={SetPelayanKami} />
			)}

			<CertificateDialog
				open={openCertificateDialog}
				handleClose={() => setOpenCertificateDialog(false)}
				participantImage={certificateData?.participant_photo}
				participantName={certificateData?.participant_name}
				participantNis={certificateData?.nis}
				participantCertificateNumber={certificateData?.number}
				participantBatch={certificateData?.batch}
				participantTraining={certificateData?.training_name}
			/>
		</div>
	);
};

export default Navbar;
