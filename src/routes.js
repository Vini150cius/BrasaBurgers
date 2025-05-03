import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import InitScreen from "./screens/InitScreen";
import MenuScreen from "./screens/MenuScreen";

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Init"
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: "#fff" },
            }}>
            <Stack.Screen name="Init" component={InitScreen} />
            <Stack.Screen name="Menu" component={MenuScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}