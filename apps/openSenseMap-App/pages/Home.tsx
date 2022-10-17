import { SafeAreaView, View, Text } from "react-native";
import { useLocation } from "location-privacy-toolkit";
import React from "react";
import Map from "@/components/Map";
import OmniBox from "@/components/OmniBox";
import OsemBoxes from "@/features/boxes/components/OsemBoxes";
import BoxPanel from "@/components/BoxPanel";

const Home = () => {
  // const { location, geocodedLocation } = useLocation();

  return (
    <>
      <View className="flex-1">
        <View className="flex-1">
          <Map>
            <OsemBoxes />
          </Map>
        </View>
        <BoxPanel />
      </View>
      <SafeAreaView className="w-full absolute">
        <OmniBox />
      </SafeAreaView>
    </>
  );
};

export default Home;
