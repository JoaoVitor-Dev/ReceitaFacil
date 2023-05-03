import { StyleSheet, Text, View } from "react-native"

export function Ingredients({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameIngredient}>{data.name}</Text>
      <Text style={styles.qntdIngredient}>{data.amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  nameIngredient: {
    fontWeight: 700,
    fontSize: 18,
    color: "#000000",
  },
  qntdIngredient: {
    fontWeight: 400,
    fontSize: 14,
    color: "#000000",
  },
})
