import React, { useState } from "react";
import {
  Pressable,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { CheckIcon } from "react-native-heroicons/outline";
import colors from "tailwindcss/colors";

type Props = {
  label?: string;
  checked?: boolean;
};

const Checkbox = ({ label, checked: defaultChecked }: Props) => {
  const [checked, onChange] = useState(defaultChecked);

  function onCheckmarkPress() {
    onChange(!checked);
  }

  return (
    <TouchableOpacity
      onPress={onCheckmarkPress}
      className="flex flex-row items-center space-x-2 my-1"
    >
      <View className="bg-zinc-100 w-5 h-5 flex items-center justify-center rounded-full">
        {checked && (
          <CheckIcon size={14} color={colors.zinc[500]} strokeWidth={3} />
        )}
      </View>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;
