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

  useEffect(() => {
    if (error) {
      setError(error.message);
    } else {
      setError("");
    }

    setLoading(!boxes && !error);
  }, [boxes, error]);

  if (!boxes || error) return <></>;

  return (
    <ShapeSource shape={boxes} onPress={(e) => console.log(e.features[0])}>
      <CircleLayer
        id="boxes"
        style={{
          circleColor: "#4eaf47",
          circleRadius: 7,
          circleStrokeWidth: 2,
          circleStrokeColor: "#fff",
        }}
      ></CircleLayer>
    </ShapeSource>
  );
};

export default OsemBoxes;
