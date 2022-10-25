import React, { ReactElement, useState } from "react";
import colors from "tailwindcss/colors";
import {
  AdjustmentsVerticalIcon,
  CalendarDaysIcon,
  CalendarIcon,
  MagnifyingGlassIcon,
  MapIcon,
  SunIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";
import { View, TouchableOpacity, Text } from "react-native";
import { Style } from "nativewind/dist/style-sheet/runtime";
import PhenomenonTab from "./PhenomenonTab";
import CalendarTab from "./CalendarTab";
import SettingsTab from "./SettingsTab";

const OmniTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const TabButton = ({
    bgColor,
    index,
    children,
    style,
  }: {
    bgColor: string;
    index: number;
    children: ReactElement;
    style?: Style;
  }) => (
    <TouchableOpacity
      className={`flex-1 flex items-center rounded-full py-1.5 ${bgColor}`}
      onPress={() => setTabIndex(index)}
      style={style}
    >
      {children}
    </TouchableOpacity>
  );

  return (
    <>
      <View className="flex flex-row space-x-4 items-center mb-4">
        <TabButton bgColor="bg-orange-50" index={0}>
          <SunIcon color={colors.orange[500]} size={20} />
        </TabButton>
        <TabButton bgColor="bg-blue-50" index={1}>
          <CalendarDaysIcon color={colors.blue[500]} size={20} />
        </TabButton>
        <TabButton bgColor="bg-emerald-50" index={2}>
          <MapIcon color={colors.emerald[800]} size={20} />
        </TabButton>
      </View>
      {tabIndex === 0 && <PhenomenonTab />}
      {tabIndex === 1 && <CalendarTab />}
      {tabIndex === 2 && <SettingsTab />}
    </>
  );
};

export default OmniTabs;
