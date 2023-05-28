const API_URL_TRAINING =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_TRAINING_PROD
    : process.env.REACT_APP_API_URL_TRAINING_DEV;

export default class TrainingApi {
  static getAllTraining = (
    search,
    page,
    limit,
    filterBy,
    startDate,
    isPopular
  ) => {
    const url = new URL(`${API_URL_TRAINING}/all?status=PUBLISHED`);
    const params = url.searchParams;
    if (search) {
      params.append("search", search);
    }
    if (page) {
      params.append("page", page);
    }
    if (limit) {
      params.append("limit", limit);
    }
    if (filterBy) {
      params.append("filterBy", filterBy);
    }
    if (startDate) {
      params.append("startDate", startDate);
    }
    if (isPopular) {
      params.append("isPopular", isPopular);
    }

    return url.toString();
  };

  static getOneTraining = (id) => {
    const url = new URL(`${API_URL_TRAINING}/${id}`);
    return url.toString();
  };

  static getTrainingCategory = () => {
    const url = new URL(`${API_URL_TRAINING}/categories`);
    return url.toString();
  };
}
