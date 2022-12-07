import { MapView, MapViewProps } from "@rnmapbox/maps";
import React from "react";
import Constants from "expo-constants";

type Props = MapViewProps;

const Map = (props: Props) => {
  const maptilerKey = Constants.expoConfig?.extra?.maptilerKey;

  return (
    <MapView
      style={{
        flex: 1,
      }}
      // style={{
      //   width: "100%",
      //   height: "100%",
      // }}
      styleURL={`https://api.maptiler.com/maps/topo/style.json?key=${maptilerKey}`}
      {...props}
    />
  );
};

export default Map;
