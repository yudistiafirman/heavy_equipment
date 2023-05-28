import TrainingApi from "../HecApi/Training";
import { apiRequest } from "../networking/request";

export const getAllTraining = async (
  search,
  page,
  limit,
  filterBy,
  startDate,
  isPopular
) => {
  return apiRequest(
    TrainingApi.getAllTraining(
      search,
      page,
      limit,
      filterBy,
      startDate,
      isPopular
    ),
    "GET"
  );
};

export const getOneTraining = async (id) => {
  return apiRequest(TrainingApi.getOneTraining(id), "GET");
};

export const getTrainingCategories = async () => {
  return apiRequest(TrainingApi.getTrainingCategory(), "GET");
};
