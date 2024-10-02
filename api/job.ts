import axios, { AxiosRequestConfig } from "axios";

export const searchRoute = async () => {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/estimated-salary",
    params: {
      job_title: "NodeJS Developer",
      location: "New-York, NY, USA",
      radius: "100",
    },
    headers: {
      "x-rapidapi-key": "46768cc246msh70132e06a139072p10d3a6jsn86aa724f4d8b",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);

    return response.data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
