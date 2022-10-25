import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from "react-native";
import {
  ChevronUpDownIcon,
  CloudIcon,
  CubeTransparentIcon,
  LightBulbIcon,
  SignalIcon,
  SunIcon,
} from "react-native-heroicons/outline";
import { NumberProp, SvgProps } from "react-native-svg";
import colors from "tailwindcss/colors";

const PhenomenonButton = ({
  color,
  title,
  Icon,
  style,
}: {
  color: string;
  title: string;
  Icon: ({
    size,
    ...props
  }: SvgProps & {
    size?: NumberProp;
  }) => JSX.Element;
  style?: StyleProp<ViewStyle>;
}) => (
  <TouchableOpacity
    className="flex flex-row space-x-2 items-center"
    style={style}
  >
    <Icon size={20} color={color} />
    <Text className={`font-medium text-zinc-[${color}]`}>{title}</Text>
  </TouchableOpacity>
);

const PhenomenonTab = () => {
  return (
    <View>
      <Text className="font-bold">Phänomene</Text>
      <TextInput
        className="flex-1 bg-zinc-50 py-2 px-4 rounded-full my-4"
        placeholder="Nach Phänomenen suchen"
      ></TextInput>
      <View className="flex space-y-4">
        <PhenomenonButton
          color={colors.zinc[700]}
          title="Temperatur"
          Icon={SunIcon}
        />
        <PhenomenonButton
          color={colors.zinc[700]}
          title="rel. Luftfeuchte"
          Icon={CloudIcon}
        />
        <PhenomenonButton
          color={colors.zinc[700]}
          title="Luftdruck"
          Icon={ChevronUpDownIcon}
        />
        <PhenomenonButton
          color={colors.zinc[700]}
          title="Beleuchtungsstärke"
          Icon={LightBulbIcon}
        />
        <PhenomenonButton
          color={colors.zinc[700]}
          title="UV-Strahlung"
          Icon={SignalIcon}
        />
        <PhenomenonButton
          color={colors.zinc[700]}
          title="PM2.5"
          Icon={CubeTransparentIcon}
        />
        <PhenomenonButton
          color={colors.zinc[700]}
          title="PM10"
          Icon={CubeTransparentIcon}
        />
      </View>
    </View>
  );
};

export default PhenomenonTab;
