import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import Logo from "../../components/Logo";
import styles from "./styles";

export default function InitScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Menu")}
      >
        <Text style={styles.textButton}> Ver cardápio </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
