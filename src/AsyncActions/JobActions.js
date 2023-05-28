import JobApi from "../HecApi/Job";
import { apiRequest } from "../networking/request";

export const getAllJob = async (search, page, limit, filterBy) => {
  return apiRequest(JobApi.getAllJob(search, page, limit, filterBy), "GET");
};

export const getOneJob = async (id) => {
  return apiRequest(JobApi.getOneJob(id), "GET");
};

export const getCategories = async () => {
  return apiRequest(JobApi.getJobCategory(), "GET");
};
