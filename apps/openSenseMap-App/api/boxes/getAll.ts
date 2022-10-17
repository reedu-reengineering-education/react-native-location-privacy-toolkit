import { axios } from "@/lib/axios";

export const getAll = async (minimal = false) => {
  const url = new URL("boxes");
  url.searchParams.append("format", "geojson");
  if (minimal) {
    url.searchParams.append("minimal", "true");
  }

  const res = await axios.get(url.toString());
  return res.data;
};
