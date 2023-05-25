const API_URL_TRAINING_GALLERY =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_TRAINING_GALLERY_PROD
    : process.env.REACT_APP_API_URL_TRAINING_GALLERY_DEV;

export default class TrainingGalleryApi {
  static getAllTrainingGallery = (search, page, limit, filterBy) => {
    const url = new URL(`${API_URL_TRAINING_GALLERY}/all`);
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

    return url.toString();
  };
}
