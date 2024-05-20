const API_URL_PARTICIPANT =
	process.env.NODE_ENV === "production"
		? process.env.REACT_APP_API_URL_PARTICIPANT_PROD
		: process.env.REACT_APP_API_URL_PARTICIPANT_DEV;

export default class CertificateApi {
	static searchCertificate = (certificateNumber) => {
		const url = new URL(`${API_URL_PARTICIPANT}/search/certificate`);
		const params = url.searchParams;
		if (certificateNumber) {
			params.append("certificateNumber", certificateNumber);
		}
		return url.toString();
	};
}
