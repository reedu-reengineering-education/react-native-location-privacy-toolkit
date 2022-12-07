import { useBox } from "@/features/boxes/api";
import { boxAtom } from "@/stores/boxStore";
import { loadingAtom } from "@/stores/loadingStore";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import {
  ArchiveBoxIcon,
  CubeIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";
import colors from "tailwindcss/colors";

const BoxPanel = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedBox, setSelectedBox] = useAtom(boxAtom);

  const { data: box, error } = useBox(selectedBox?.properties._id || "");

  const [, setLoading] = useAtom(loadingAtom);

  useEffect(() => {
    setLoading(!box && !error);
  }, [box, error]);

  if (!selectedBox) return <></>;

  return (
    <SafeAreaView
      className={`${expanded ? "bg-white" : "bg-[#4eaf47]"} shadow`}
    >
      <TouchableOpacity onPress={() => setExpanded(!expanded)}>
        <View className="bg-[#4eaf47] flex flex-row items-center">
          <View className="p-4">
            <CubeIcon color={colors.white} />
          </View>
          <Text className="text-white font-semibold mx-auto p-4">
            {box?.properties?.name || selectedBox?.properties.name}
          </Text>
          <TouchableOpacity
            onPress={() => setSelectedBox(undefined)}
            className="p-4"
          >
            <XMarkIcon color={colors.white} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      {expanded && (
        <View className="p-8 flex flex-row justify-around bg-white">
          <Text>12°C</Text>
          <Text>55%</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
export default BoxPanel;
