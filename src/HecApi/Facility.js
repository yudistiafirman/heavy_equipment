const API_URL_FACILITY =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_FACILITY_PROD
    : process.env.REACT_APP_API_URL_FACILITY_DEV;

export default class FaciltiyApi {
  static getAllFacility = (search, page, limit, filterBy) => {
    const url = new URL(`${API_URL_FACILITY}/ALL`);
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
