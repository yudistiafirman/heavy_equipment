import FacilityApi from "../HecApi/Facility";
import { apiRequest } from "../networking/request";

export const getAllFacility = async (search, page, limit, filterBy) => {
  return apiRequest(
    FacilityApi.getAllFacility(search, page, limit, filterBy),
    "GET"
  );
};
