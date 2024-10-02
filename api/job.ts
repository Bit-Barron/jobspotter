import axios, { AxiosRequestConfig } from "axios";

export const searchRoute = async (endpoint?: string) => {
  const options: AxiosRequestConfig<any> = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint || "search"}`,
    params: {
      query: "developer",
      page: "1",
      num_pages: "1",
      date_posted: "all",
    },
    headers: {
      "x-rapidapi-key": "36a2fe5d77msh11bcfac3de81c95p15dea7jsnd2d229e01397",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);

  return response.data;
};
