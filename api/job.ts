import axios from "axios";

export const searchRoute = async () => {
  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: "Node.js developer in New-York,USA",
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
