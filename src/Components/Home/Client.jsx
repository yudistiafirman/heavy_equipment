import React from "react";

const BASE_URL =
	process.env.NODE_ENV === "production"
		? process.env.REACT_APP_API_URL_PROD
		: process.env.REACT_APP_API_URL_DEV;

const Client = ({ logo }) => {
	console.log(logo);
	return (
		<div className="homeGaleriContainer">
			<div className="servicesTitle">
				<div className="marginSeparator" />
				<div className="titleContainer">
					<div className="titleForYou">Partner</div>
					<p className="forYouDesc">
						HEC telah bekerja sama dengan perusahaan perusahaan
						ternama di Indonesia, alumni kami bekerja di
					</p>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: "row",
				}}
			>
				{logo && logo.length > 0
					? logo.map((v, i) => {
							return (
								<div
									key={i}
									style={{
										padding: "10px",
										width: "150px",

										display: "flex",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									<img
										style={{
											width: "100%",
											resize: "block",
										}}
										src={`${BASE_URL}/${v.file_url}`}
										loading="lazy"
										alt="#"
									/>
								</div>
							);
					  })
					: null}
			</div>
		</div>
	);
};

export default Client;
