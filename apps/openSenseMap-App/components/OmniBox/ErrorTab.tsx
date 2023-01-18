import { errorAtom } from "@/stores/errorStore";
import { loadingAtom } from "@/stores/loadingStore";
import { useAtom } from "jotai";
import React from "react";
import { View, Text } from "react-native";

const ErrorTab = () => {
  const [error] = useAtom(errorAtom);

  if (!error || error === "") return <></>;

  return (
    <View className="mx-auto rounded-b-md bg-rose-500 shadow border-zinc-200 border-[0.5]">
      <Text className="text-white font-bold py-1 px-3">{error}</Text>
    </View>
  );
};

export default ErrorTab;
