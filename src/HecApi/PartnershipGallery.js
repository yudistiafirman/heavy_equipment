const API_URL_PARTNERSHIP_GALLERY =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL_PARTNERSHIP_GALLERY_PROD
    : process.env.REACT_APP_API_URL_PARTNERSHIP_GALLERY_DEV;
console.log(API_URL_PARTNERSHIP_GALLERY);
export default class PartnershipGalleryApi {
  static getAllPartnershipGallery = (search, page, limit, filterBy) => {
    const url = new URL(`${API_URL_PARTNERSHIP_GALLERY}/all?status=PUBLISHED`);

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
      params.append("filterby", filterBy);
    }

    return url.toString();
  };
}
