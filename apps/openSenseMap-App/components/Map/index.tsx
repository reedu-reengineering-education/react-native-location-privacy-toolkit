import React, { forwardRef } from "react";
import Constants from "expo-constants";
import MapLibreGL, { MapViewProps } from "@maplibre/maplibre-react-native";
import { MAPTILER_KEY } from "@env";

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.
MapLibreGL.setAccessToken(null);

const Map = forwardRef<MapLibreGL.MapView, MapViewProps>((props, ref) => {
  return (
    <MapLibreGL.MapView
      ref={ref}
      style={{
        flex: 1,
      }}
      styleURL={`https://api.maptiler.com/maps/topo/style.json?key=${MAPTILER_KEY}`}
      attributionPosition={{ right: 10, bottom: 10 }}
      {...props}
    />
  );
});

export default Map;
