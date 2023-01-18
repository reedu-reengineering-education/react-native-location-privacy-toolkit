import { loadingAtom } from "@/stores/loadingStore";
import { useAtom } from "jotai";
import React from "react";
import { View, Text } from "react-native";

const LoadingTab = () => {
  const [loading] = useAtom(loadingAtom);

  if (!loading) return <></>;

  return (
    <View className="mx-auto rounded-b-md bg-[#0978bc] shadow border-zinc-200 border-[0.5]">
      <Text className="text-white font-bold py-1 px-3">Loading...</Text>
    </View>
  );
};

export default LoadingTab;
