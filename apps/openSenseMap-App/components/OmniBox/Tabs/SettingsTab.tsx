import Checkbox from "@/components/Elements/Checkbox";
import React from "react";
import { View, Text } from "react-native";

const SettingsTab = () => {
  return (
    <View>
      <Text className="font-bold mb-4">Karten Einstellungen</Text>

      <Checkbox label="Clustering" />

      <Text className="font-semibold my-2">Standort</Text>
      <Checkbox label="Indoor" checked />
      <Checkbox label="Outdoor" checked />
      <Checkbox label="Mobil" checked />

      <Text className="font-semibold my-2">Modell</Text>
      <Checkbox label="senseBox" checked />
      <Checkbox label="sensor.community" checked />
      <Checkbox label="Hackair" checked />
      <Checkbox label="Custom" checked />
    </View>
  );
};

export default SettingsTab;
