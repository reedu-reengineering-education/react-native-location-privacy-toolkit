import React, { useRef, useState } from "react";
import { View, Text, Pressable, Animated, TextInput } from "react-native";

const OmniBox = () => {
  const [erected, setErected] = useState(false);

  return (
    <Pressable onPress={() => setErected(!erected)}>
      <Animated.View className="px-6 py-5 m-5 rounded-3xl shadow-md bg-white">
        {!erected && <Text>Hello World</Text>}
        {erected && (
          <>
            <TextInput autoFocus placeholder="Hello World"></TextInput>
            <View className="my-4 border-zinc-500 border-b-2"></View>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
              cumque asperiores consequatur pariatur. Voluptates ad numquam enim
              optio sunt maxime voluptas, blanditiis assumenda temporibus hic.
              Dolorum nihil ea consequuntur ad?
            </Text>
          </>
        )}
      </Animated.View>
    </Pressable>
  );
};

export default OmniBox;
