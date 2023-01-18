import Axios, { AxiosRequestConfig } from "axios";
import Constants from "expo-constants";

export const axios = Axios.create({
  baseURL:
    Constants.expoConfig?.extra?.osemApi || "https://api.opensensemap.org",
});

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
