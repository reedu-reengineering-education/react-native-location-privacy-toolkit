import React from "react";
import Constants from "expo-constants";
import MapLibreGL, { MapViewProps } from "@maplibre/maplibre-react-native";

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.
MapLibreGL.setAccessToken(null);

const Map = (props: MapViewProps) => {
  const maptilerKey = Constants.expoConfig?.extra?.maptilerKey;

  return (
    <MapLibreGL.MapView
      style={{
        flex: 1,
      }}
      styleURL="https://demotiles.maplibre.org/style.json"
      // styleURL={`https://api.maptiler.com/maps/topo/style.json?key=${maptilerKey}`}
      {...props}
    />
  );
};

export default Map;
