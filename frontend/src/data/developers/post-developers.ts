import { fetchPostDeveloperJson } from "../../utils/fetch-post-developer";
import { DEVELOPERS_URL } from "../../config/app-config";
import { fetchPutDeveloperJson } from "../../utils/fetch-put-developer";

export const postDeveloper = async (
  name: string,
  email: string,
  age: string,
  url: string,
) => {
  const route = `${DEVELOPERS_URL}`;
  return await fetchPostDeveloperJson(route, name, email, age, url);
};

export const putDeveloper = async (
  link: string,
  name: string,
  email: string,
  age: string,
  url: string,
) => {
  return await fetchPutDeveloperJson(link, name, email, age, url);
};
