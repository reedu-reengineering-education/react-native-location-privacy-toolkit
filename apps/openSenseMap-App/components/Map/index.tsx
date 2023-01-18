import React from "react";
import Constants from "expo-constants";
import MapLibreGL, { MapViewProps } from "@maplibre/maplibre-react-native";
import { MAPTILER_KEY } from "@env";

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.
MapLibreGL.setAccessToken(null);

const Map = (props: MapViewProps) => {
  return (
    <MapLibreGL.MapView
      style={{
        flex: 1,
      }}
      styleURL={`https://api.maptiler.com/maps/topo/style.json?key=${MAPTILER_KEY}`}
      {...props}
    />
  );
};

export default Map;
