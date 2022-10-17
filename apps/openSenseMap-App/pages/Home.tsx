// import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useLocation } from "location-privacy-toolkit";
import React from "react";
import Map from "@/components/Map";
import OmniBox from "@/components/OmniBox";
import { getAll } from "@/api/boxes/getAll";
import { useEffect } from "react";
import { useState } from "react";
import { CircleLayer, ShapeSource } from "@rnmapbox/maps";

const Home = () => {
  const { location, geocodedLocation } = useLocation();

  const [boxes, setBoxes] = useState<GeoJSON.FeatureCollection>();

  useEffect(() => {
    (async () => {
      const data = await getAll(true);
      setBoxes(data);
    })();
  }, []);

  return (
    <>
      <Map>
        {boxes && (
          <ShapeSource
            shape={boxes}
            onPress={(e) => console.log(e.features[0])}
          >
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
        )}
      </Map>
      <SafeAreaView className="w-full absolute">
        <OmniBox />
      </SafeAreaView>
      <SafeAreaView className="absolute w-full bottom-0">
        <View className="mb-12 bg-white">
          <Text>Boxes: {boxes?.features.length}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
