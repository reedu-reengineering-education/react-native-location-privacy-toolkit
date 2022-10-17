import { boxAtom, senseBox } from "@/stores/boxStore";
import { errorAtom } from "@/stores/errorStore";
import { loadingAtom } from "@/stores/loadingStore";
import { CircleLayer, ShapeSource } from "@rnmapbox/maps";
import { useAtom } from "jotai";
import React from "react";
import { useEffect } from "react";
import { useBoxes } from "../api";

const OsemBoxes = () => {
  const { data: boxes, error } = useBoxes(true);

  const [, setError] = useAtom(errorAtom);
  const [, setLoading] = useAtom(loadingAtom);
  const [, setSelectedBox] = useAtom(boxAtom);

  useEffect(() => {
    if (error) {
      setError(error.message);
    } else {
      setError("");
    }

    setLoading(!boxes && !error);
  }, [boxes, error]);

  if (!boxes || error) return <></>;

  const lastWeek = new Date(new Date().setDate(new Date().getDate() - 7));

  return (
    <ShapeSource
      shape={boxes}
      onPress={({ features, coordinates, point }) => {
        setSelectedBox(features[0] as senseBox);
      }}
      hitbox={{
        width: 100,
        height: 100,
      }}
    >
      <CircleLayer
        className="z-10"
        id="boxes"
        style={{
          circleColor: "#4eaf47",
          circleRadius: ["interpolate", ["linear"], ["zoom"], 10, 15, 5, 4],
          circleStrokeWidth: [
            "interpolate",
            ["linear"],
            ["zoom"],
            8,
            2,
            5,
            0.2,
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
      ></CircleLayer>
    </ShapeSource>
  );
};

export default OsemBoxes;
