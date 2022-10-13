import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useLocation } from "location-privacy-toolkit";
import Map from "./components/Map";
import React from "react";
import OmniBox from "./components/OmniBox";

export default function App() {
  const { location, geocodedLocation } = useLocation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor="red" />
      <Map />
      <SafeAreaView
        style={{
          position: "absolute",
          padding: 20,
          width: "100%",
        }}
      >
        <OmniBox />
        {/* <Text>{JSON.stringify(location?.coords)}</Text>
        <Text>{JSON.stringify(geocodedLocation)}</Text> */}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
