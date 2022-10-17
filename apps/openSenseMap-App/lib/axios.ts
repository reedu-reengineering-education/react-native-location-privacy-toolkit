import Axios, { AxiosRequestConfig } from "axios";
import Constants from "expo-constants";

export const axios = Axios.create({
  baseURL: Constants.expoConfig?.extra?.osemApi,
});
