import { boxAtom, senseBox } from "@/stores/boxStore";
import { errorAtom } from "@/stores/errorStore";
import { loadingAtom } from "@/stores/loadingStore";
import flip from "@turf/flip";
import { useAtom } from "jotai";
import React, { forwardRef } from "react";
import { useEffect } from "react";
import { Text } from "react-native";
import { useBoxes } from "../api";
import MapLibreGL, { ShapeSourceProps } from "@maplibre/maplibre-react-native";

const OsemBoxes = forwardRef<
  MapLibreGL.ShapeSource,
  Omit<ShapeSourceProps, "id">
>((_props, ref) => {
  const { data: boxes, error } = useBoxes({
    minimal: true,
  });

  const [, setError] = useAtom(errorAtom);
  const [, setLoading] = useAtom(loadingAtom);
  const [, setSelectedBox] = useAtom(boxAtom);

  useEffect(() => {
    setError(error?.message || "");
    setLoading(!boxes && !error);
  }, [boxes, error]);

  if (!boxes || error) return <></>;

  const lastWeek = new Date(new Date().setDate(new Date().getDate() - 7));

  console.log(boxes.features.length);

  return (
    <MapLibreGL.ShapeSource
      id="senseBoxes"
      ref={ref}
      shape={boxes}
      onPress={({ features, coordinates, point }) => {
        setSelectedBox(features[0] as senseBox);
      }}
      {..._props}
    >
      <MapLibreGL.CircleLayer
        id="senseBoxes"
        style={{
          circleColor: "#4eaf47",
          circleRadius: ["interpolate", ["linear"], ["zoom"], 5, 4, 10, 15],
          circleStrokeWidth: [
            "interpolate",
            ["linear"],
            ["zoom"],
            5,
            0.2,
            8,
            2,
          ],
          circleStrokeColor: "#fff",
          circleStrokeOpacity: [
            "case",
            ["<", ["get", "lastMeasurementAt"], lastWeek.toISOString()],
            0.3,
            [">=", ["get", "lastMeasurementAt"], lastWeek.toISOString()],
            1,
            0.3,
          ],
          circleOpacity: [
            "case",
            ["<", ["get", "lastMeasurementAt"], lastWeek.toISOString()],
            0.3,
            [">=", ["get", "lastMeasurementAt"], lastWeek.toISOString()],
            1,
            0.3,
          ],
        }}
      ></MapLibreGL.CircleLayer>
    </MapLibreGL.ShapeSource>
  );
});

export default OsemBoxes;
