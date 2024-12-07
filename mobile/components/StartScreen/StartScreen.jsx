import { Text, TouchableOpacity, Button, Pressable } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import Logo from "../Logo/Logo";

import S from "./styles";
import { useNavigation } from "@react-navigation/native";
import LoginScreen from "../../Screens/Login/Login";

export default function StartScreen() {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={S.posicao}>
        <View style={S.container}>
          <Logo />
          <Pressable style={S.button} onPress={() => {navigation.navigate("Main")}}>
            <Text style={S.textButton}> Entrar </Text>
          </Pressable>
          <Pressable style={S.button}>
            <Text style={S.textButton}> Cadastrar </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}
