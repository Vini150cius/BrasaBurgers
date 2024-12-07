import { Text, useColorScheme, View, StyleSheet, FlatList, Image } from "react-native";
import { lightTheme, darkTheme } from "../../components/Styles/Styles";
import Button from "../../components/Button/Button";
import data from "./data";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuScreen() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? darkTheme : lightTheme;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      marginVertical: 15,
      paddingBottom: 12,
      borderRadius: 7,
      flex: 1,
    },
    card: {
      backgroundColor: theme.colors.backgroundSecond,
      marginVertical: 15,
      paddingBottom: 12,
      borderRadius: 7,
      flex: 1,
      marginLeft: 5,
      marginRight: 5,
    },
    texto1: {
      fontSize: 20,
      paddingHorizontal: 5,
      color: theme.colors.text,
    },
    texto2: {
      fontStyle: 9,
      paddingHorizontal: 5,
      color: theme.colors.text,
    },
    texto3: {
      fontSize: 16,

      paddingHorizontal: 5,
      color: theme.colors.text,
    },
    detalhes: {
      width: 200,
    },
    display: {
      position: "relative",
      margin: 10,
    },
    imagem: {
      width: 300,
      height: 180,
      borderRadius: 9,
      margin: 4,
    },
    texto: {

      fontSize: 14,
    },
    separador: {
      height: 1,
      backgroundColor: "grey",
      margin: 5,
    },
    posicao: {
      justifyContent: "center",
      alignItems: "flex-start",
      flexDirection: "row",
      display: "flex",
      flex: 1,
    },
  });

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        style={styles.container}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Image source={{ uri: item.imgUrl }} style={styles.imagem} />
            </View>
            <View style={styles.posicao}>
              <View style={styles.detalhes}>
                <Text style={styles.texto1}>{item.titulo}</Text>
                <Text style={styles.texto2}>{item.descricao}</Text>
                <Text style={styles.texto3}>{item.preco}</Text>
              </View>
              <Button theme={theme}/>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        // ItemSeparationComponents = errado
        ItemSeparatorComponent={() => <View style={styles.separador}></View>}
      />
    </SafeAreaView>
  );
}
