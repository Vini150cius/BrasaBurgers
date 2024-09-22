import * as React from "react";
import { Text, View, StyleSheet, useColorScheme } from "react-native";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import HomeScreen from "./Screens/Home/Home";
import MenuScreen from "./Screens/Menu/Menu";
import CartScreen from "./Screens/Cart/Cart";
import RequestsScreen from "./Screens/Requests/Requests";
import PerfilScreen from "./Screens/Perfil/Perfil";

const Tab = createBottomTabNavigator();
export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              return <Octicons name="home" size={size} color={color} />;
            } else if (route.name === "Menu") {
              return (
                <MaterialIcons
                  name="restaurant-menu"
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === "Carrinho") {
              return <Feather name="shopping-cart" size={size} color={color} />;
            } else if (route.name === "Pedidos") {
              return (
                <FontAwesome5 name="clipboard-list" size={size} color={color} />
              );
            } else if (route.name === "Perfil") {
              return (
                <FontAwesome
                  name="user-circle-o"
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "#666",
          headerTitleAlign: "center",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
        <Tab.Screen name="Carrinho" component={CartScreen} />
        <Tab.Screen name="Pedidos" component={RequestsScreen} />
        <Tab.Screen name="Perfil" component={PerfilScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
