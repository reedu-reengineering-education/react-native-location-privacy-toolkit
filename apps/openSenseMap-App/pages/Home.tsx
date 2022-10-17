// import { StatusBar } from "expo-status-bar";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useLocation } from "location-privacy-toolkit";
import React from "react";
import Map from "@/components/Map";
import OmniBox from "@/components/OmniBox";
import { getAll } from "@/api/boxes/getAll";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const { location, geocodedLocation } = useLocation();

  const [boxes, setBoxes] = useState<GeoJSON.FeatureCollection>();

  useEffect(() => {
    (async () => {
      const data = await getAll();
      setBoxes(data);
    })();
  }, []);

  return (
    <>
      <Map />
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
