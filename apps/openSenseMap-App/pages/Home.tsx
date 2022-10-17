import { SafeAreaView } from "react-native";
import { useLocation } from "location-privacy-toolkit";
import React from "react";
import Map from "@/components/Map";
import OmniBox from "@/components/OmniBox";
import OsemBoxes from "@/features/boxes/components/OsemBoxes";

const Home = () => {
  // const { location, geocodedLocation } = useLocation();

  return (
    <>
      <Map>
        <OsemBoxes />
      </Map>
      <SafeAreaView className="w-full absolute">
        <OmniBox />
      </SafeAreaView>
      <SafeAreaView className="absolute w-full bottom-0">
        {/* <View className="mb-12 bg-white">
          <Text>Boxes: {boxes?.features.length}</Text>
        </View> */}
      </SafeAreaView>
    </>
  );
};

export default Home;
