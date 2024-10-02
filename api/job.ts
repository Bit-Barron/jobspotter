import axios, { AxiosRequestConfig } from "axios";

export const searchRoute = async (query?: string, endpoint?: string) => {
  const options: AxiosRequestConfig<any> = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint || "search"}`,
    params: {
      query: `${query || "developer"}`,
      page: "1",
      num_pages: "1",
      date_posted: "all",
    },
    headers: {
      "x-rapidapi-key": "46768cc246msh70132e06a139072p10d3a6jsn86aa724f4d8b",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);

  return response.data;
};
