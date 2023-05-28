import HomeGalleryApi from "../HecApi/HomeGallery";
import { apiRequest } from "../networking/request";

export const getAllHomeGallery = async (search, page, limit, filterBy) => {
  return apiRequest(
    HomeGalleryApi.getAllHomeGallery(search, page, limit, filterBy),
    "GET"
  );
};
