import { axios } from "@/lib/axios";

export const getAll = async () => {
  const res = await axios.get("/boxes?format=geojson");
  return res.data;
};
