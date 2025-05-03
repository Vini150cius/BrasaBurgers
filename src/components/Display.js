import { View, Text } from "react-native";
import styles from "./ListStyles";

export default ({ number }) => (
  <View style={styles.display}>
    <Text style={styles.text}>{number}</Text>
  </View>
);
