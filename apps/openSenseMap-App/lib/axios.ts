import { OSEM_API_BASEURL } from "@env";
import Axios, { AxiosRequestConfig } from "axios";
import Constants from "expo-constants";

export const axios = Axios.create({
  baseURL: OSEM_API_BASEURL,
});

export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
