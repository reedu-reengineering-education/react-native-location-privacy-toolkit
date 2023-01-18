import clsx from "clsx";
import React, { ReactElement, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  CogIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "react-native-heroicons/outline";
import colors from "tailwindcss/colors";
import ErrorTab from "./ErrorTab";
import LoadingTab from "./LoadingTab";
import OmniTabs from "./Tabs/OmniTabs";

const OmniHeaderLayout = ({ children }: { children: ReactElement }) => (
  <View className="flex flex-row items-center space-x-2 w-full">
    <MagnifyingGlassIcon color={colors.zinc[800]} size={20} />
    {children}
  </View>
);

const OmniBox = () => {
  const [expanded, setExpanded] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setIsSearching(searchText.length > 0);
  }, [searchText]);

  return (
    <View className="mx-4 my-2">
      <View className="flex flex-row space-x-2 w-full">
        <Pressable
          onPress={() => setExpanded(true)}
          className={clsx(
            "px-5 py-4 shadow-md border-zinc-200 border-[0.5px] flex-1 bg-white overflow-hidden",
            expanded ? "rounded-3xl" : "rounded-full"
          )}
        >
          {!expanded && (
            <OmniHeaderLayout>
              <Text className="text-zinc-800 font-medium text-sm">
                Suche, Filter & Einstellungen
              </Text>
            </OmniHeaderLayout>
          )}
          {expanded && (
            <>
              <OmniHeaderLayout>
                <View className="flex flex-row items-center justify-between flex-1">
                  <TextInput
                    className="font-medium flex-1"
                    autoFocus
                    placeholder="Suche, Filter & Einstellungen"
                    onChangeText={(text) => setSearchText(text)}
                    value={searchText}
                  ></TextInput>
                  {isSearching && (
                    <TouchableOpacity
                      onPress={(e) => {
                        e.preventDefault();
                        setIsSearching(false);
                        setSearchText("");
                      }}
                    >
                      <XMarkIcon color={colors.zinc[600]} size={20} />
                    </TouchableOpacity>
                  )}
                </View>
              </OmniHeaderLayout>
              <View className="my-4 border-zinc-500 border-[0.5px]"></View>
              {isSearching && <Text>Searching...</Text>}
              {!isSearching && <OmniTabs />}
              <TouchableOpacity
                className="pt-2"
                onPress={() => setExpanded(false)}
              >
                <View className="border-2 mx-auto w-20 border-zinc-200 rounded-full" />
              </TouchableOpacity>
            </>
          )}
        </Pressable>
        {!expanded && (
          <Pressable
            className={clsx(
              "p-4 shadow-md border-zinc-200 border-[0.5px] bg-white overflow-hidden rounded-full"
            )}
          >
            <CogIcon />
          </Pressable>
        )}
      </View>
      <LoadingTab />
      <ErrorTab />
    </View>
  );
};

export default OmniBox;
