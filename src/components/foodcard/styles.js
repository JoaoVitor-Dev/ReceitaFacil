import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  cover: {
    width: "100%",
    height: 170,
    borderRadius: 10,
  },
  info: {
    position: "absolute",
    bottom: 15,
    left: 14,
    zIndex: 99,
  },
  foodName: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#ffffff",
  },
  foodInfo: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 400,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: "55%",
    borderRadius: 10,
    zIndex: 1,
    backgroundColor: "trasparent",
  },
});

export default styles;
