import { View, Text, StyleSheet } from "react-native"

export function Instructions({ data, index }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{index + 1}- </Text>
      <Text style={styles.text}>{data.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  text: {
    lineHeight: 20,
  },
})
