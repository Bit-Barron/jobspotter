import axios, { AxiosError, AxiosRequestConfig } from "axios";

const MAX_RETRIES = 3;
const INITIAL_BACKOFF = 1000;

export const searchRoute = async (
  query?: string,
  endpoint?: string,
  retryCount?: number,
  page: string = "1"
): Promise<any> => {
  const options: AxiosRequestConfig<any> = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint || "search"}`,
    params:
      endpoint === "job-details"
        ? {
            job_id: query,
            extended_publisher_details: "false",
          }
        : {
            query: `${query || "developer"}`,
            page: `${page || "1"}`,
            num_pages: 1,
            date_posted: "all",
          },
    headers: {
      "x-rapidapi-key": "8d212c196fmshec3fbea54f98f89p1a3551jsn6a3f84ea2553",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (
        axiosError.response?.status === 429 &&
        (retryCount as number) < MAX_RETRIES
      ) {
        const backoffTime = INITIAL_BACKOFF * Math.pow(2, retryCount as number);
        console.log(`Rate limited. Retrying in ${backoffTime}ms...`);
        await new Promise((resolve) => setTimeout(resolve, backoffTime));
        return searchRoute(query, endpoint, (retryCount ?? 0) + 1);
      }
    } else {
      console.error("An unexpected error occurred:", error);
    }
    throw error;
  }
};
