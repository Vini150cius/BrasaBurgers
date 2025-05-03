import { Text, Image, View, FlatList, SafeAreaView } from "react-native";

import Button from "./Button";
import styles from "./ListStyles";
import data from "./data";

export default () => (
  <SafeAreaView>
    <FlatList
      style={styles.container}
      data={data}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <View>
            <Image source={{ uri: item.imgUrl }} style={styles.img} />
          </View>
          <View style={styles.position}>
            <View style={styles.details}>
              <Text style={styles.text1}>{item.title}</Text>
              <Text style={styles.text2}>{item.description}</Text>
              <Text style={styles.text3}>{item.price}</Text>
            </View>
            <Button />
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
      // ItemSeparationComponents = errado
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
    />
  </SafeAreaView>
);
