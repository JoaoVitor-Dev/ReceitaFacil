import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native"
import { WebView } from "react-native-webview"

import { Feather } from "@expo/vector-icons"

export function Video({ closeVideo, videoUrl }) {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.buttonReturn} onPress={closeVideo}>
        <Feather name="arrow-left" size={22} color="#ffffff" />
        <Text style={styles.textButtonReturn}> Voltar </Text>
      </TouchableOpacity>
      <WebView style={styles.webViewStyle} source={{ uri: videoUrl }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  buttonReturn: {
    width: "100%",
    backgroundColor: "#4CBE6C",
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
  },
  textButtonReturn: {
    marginLeft: 12,
    color: "#ffffff",
    fontWeight: 700,
    fontSize: 16,
  },
  webViewStyle: {
    flex: 1,
    width: "100%",
  },
})
