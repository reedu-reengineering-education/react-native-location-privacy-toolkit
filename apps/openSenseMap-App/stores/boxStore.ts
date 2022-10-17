import { atom } from "jotai";

export type senseBoxProperties = {
  _id: string;
  exposure: "indoor" | "outdoor" | "mobile";
  name: string;
  lastMeasurementAt?: Date;
};
export type senseBox = GeoJSON.Feature<GeoJSON.Point, senseBoxProperties>;
export type minimalSenseBoxes = GeoJSON.FeatureCollection<
  GeoJSON.Point,
  senseBoxProperties
>;

export const boxAtom = atom<senseBox | undefined>(undefined);
