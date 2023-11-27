import { baseUrl } from "../utils/api";

export const fetchDataFromApi = async (url) => {
  try {
    const data = await fetch(baseUrl + url);
    return data;
  } catch (err) {
    return err;
  }
};
