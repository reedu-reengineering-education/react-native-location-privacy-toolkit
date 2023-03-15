import { SafeAreaView, View, Text } from "react-native";
import React, { useEffect } from "react";
import Map from "@/components/Map";
import OmniBox from "@/components/OmniBox";
import OsemBoxes from "@/features/boxes/components/OsemBoxes";
import BoxPanel from "@/components/BoxPanel";

import { getLastKnownLocation, multiply } from "location-privacy-toolkit";

const Home = () => {
  useEffect(() => {
    multiply(2, 2).then((data) => console.log("multiply", data));
    getLastKnownLocation().then((data) => console.log("data", data));
  }, []);

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
