import PartnershipGalleryApi from "../HecApi/PartnershipGallery";
import { apiRequest } from "../networking/request";

export const getAllPartnershipGallery = async (
  search,
  page,
  limit,
  filterBy
) => {
  return apiRequest(
    PartnershipGalleryApi.getAllPartnershipGallery(
      search,
      page,
      limit,
      filterBy
    ),
    "GET"
  );
};
