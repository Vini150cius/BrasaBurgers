import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

export default ({ inicial = 0, passo = 1, theme}) => {
  const [numero, setNumero] = useState(inicial);
  const inc = () => setNumero(numero + passo);
  const dec = () => setNumero(numero - passo);

  const styles = StyleSheet.create({
    display: {
      position: "relative",
      margin: 10,
    },
    text: {
      fontSize: 14,
      color: theme.colors.text,
    },
  });

  return (
    <>
      <Button color={"red"} title={"<"} onPress={dec} />
      <View style={styles.display}>
        <Text style={styles.text}>{numero}</Text>
      </View>
      <Button color={"red"} title={">"} onPress={inc} />
    </>
  );
};


