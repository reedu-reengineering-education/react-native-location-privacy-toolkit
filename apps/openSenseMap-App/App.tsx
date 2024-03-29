// In App.js in a new project

import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@/pages/Home";
import { SWRConfig } from "swr";
import { fetcher } from "@/lib/axios";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SWRConfig>
  );
}

export default App;
