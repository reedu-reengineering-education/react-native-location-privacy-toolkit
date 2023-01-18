import { fetcher } from "@/lib/axios";
import { minimalSenseBoxes, senseBox } from "@/stores/boxStore";
import { AxiosError } from "axios";
import useSWR from "swr";

export const useBoxes = (minimal = false) => {
  const url = new URL("boxes");
  url.searchParams.append("format", "geojson");
  if (minimal) {
    url.searchParams.append("minimal", "true");
  }

  return useSWR<minimalSenseBoxes, AxiosError>(url.toString());
};

export const useBox = (id: string) => {
  const url = new URL(`boxes/${id}`);
  url.searchParams.append("format", "geojson");

  return useSWR<senseBox, AxiosError>(url.toString(), fetcher);
};
