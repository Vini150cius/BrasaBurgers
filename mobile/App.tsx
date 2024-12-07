import {
  StyleSheet,
  useColorScheme,
} from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

import Navigation from "./components/Navigation/Navigation";
import StartScreen from "./components/StartScreen/StartScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState, useEffect } from 'react';
const Stack = createNativeStackNavigator();


export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={StartScreen}
          options={{ headerShown: false, headerLeft: null }}
        />
        <Stack.Screen name="Main" component={Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
