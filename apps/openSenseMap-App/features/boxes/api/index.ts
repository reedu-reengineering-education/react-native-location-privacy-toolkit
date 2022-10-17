import useSWR from "swr";

export const useBoxes = (minimal = false) => {
  const url = new URL("boxes");
  url.searchParams.append("format", "geojson");
  if (minimal) {
    url.searchParams.append("minimal", "true");
  }

  return useSWR<GeoJSON.FeatureCollection>(url.toString());
};
