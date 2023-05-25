import TrainingGalleryApi from "../HecApi/TrainingGallery";
import { apiRequest } from "../networking/request";

export const getAllTrainingGallery = async (search, page, limit, filterBy) => {
  return apiRequest(
    TrainingGalleryApi.getAllTrainingGallery(search, page, limit, filterBy),
    "GET"
  );
};
