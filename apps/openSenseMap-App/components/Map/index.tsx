import { MapView } from "@rnmapbox/maps";
import React from "react";
import Constants from "expo-constants";

const Map = () => {
  const maptilerKey = Constants.expoConfig?.extra?.maptilerKey;

  return (
    <MapView
      style={{
        width: "100%",
        height: "100%",
      }}
      styleURL={`https://api.maptiler.com/maps/basic/style.json?key=${maptilerKey}`}
    />
  );
};

export default Map;
