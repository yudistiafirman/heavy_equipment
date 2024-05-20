import CertificateApi from "../HecApi/Certificate";
import { apiRequest } from "../networking/request";

export const searchCertificate = async (certificateNumber) => {
	return apiRequest(
		CertificateApi.searchCertificate(certificateNumber),
		"GET"
	);
};
