import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#E6E8E6",
    marginTop: 40,
    marginVertical: 15,
    paddingBottom: 12,
    borderRadius: 7,
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    marginVertical: 15,
    paddingBottom: 12,
    borderRadius: 7,
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
  },
  text1: {
    fontFamily: "Helvetica",
    fontSize: 20,
    paddingHorizontal: 5,
  },
  text2: {
    fontFamily: "Georgia",
    fontStyle: 9,
    paddingHorizontal: 5,
  },
  text3: {
    fontFamily: "Arial",
    fontSize: 16,
    fontWeight: "bold",
    paddingHorizontal: 5,
  },
  details: {
    width: 200,
  },
  display: {
    position: "relative",
    margin: 10,
  },
  img: {
    width: 300,
    height: 180,
    borderRadius: 9,
    margin: 4,
  },
  text: {
    fontWeight: "bold",
    fontFamily: "Helvetica",
    fontSize: 14,
  },
  separator: {
    height: 1,
    backgroundColor: "grey",
    margin: 5,
  },
  position: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    display: "flex",
    flex: 1,
  },
});
