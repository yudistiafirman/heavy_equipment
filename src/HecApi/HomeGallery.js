const API_URL_HOME_GALLERY =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_HOME_GALLERY_PROD
    : process.env.REACT_APP_API_URL_HOME_GALLERY_DEV;

export default class HomeGalleryApi {
  static getAllHomeGallery = (search, page, limit, filterBy) => {
    const url = new URL(`${API_URL_HOME_GALLERY}/all?status=PUBLISHED`);
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
