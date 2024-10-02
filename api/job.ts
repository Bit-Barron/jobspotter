import axios, { AxiosRequestConfig } from "axios";

interface JobQuery {
  query: string;
  page: string;
  num_pages: string;
  date_posted: string;
}

export const searchRoute = async (endpoint: string, query: JobQuery) => {
  const options: AxiosRequestConfig<any> = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint ? endpoint : "search"}`,
    params: {
      ...query,
    },
    headers: {
      "x-rapidapi-key": "36a2fe5d77msh11bcfac3de81c95p15dea7jsnd2d229e01397",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };
  const response = await axios.request(options);

  console.log("rtesponse", response);

  return response.data;
};
