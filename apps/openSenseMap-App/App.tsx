import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useLocation } from "location-privacy-toolkit";

export default function App() {
  const { location, geocodedLocation } = useLocation();
  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(location?.coords)}</Text>
      <Text>{JSON.stringify(geocodedLocation)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
