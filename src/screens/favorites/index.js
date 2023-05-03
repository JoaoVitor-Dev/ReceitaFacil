import { useState, useEffect } from "react"
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native"
import { useIsFocused } from "@react-navigation/native"

import { FoodCard } from "../../components/foodcard"

import { getFavItens } from "../../utils/storage"

export function Favorites() {
  const [receipes, setReceipes] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    let isActive = true

    async function getReceipes() {
      const receipesFav = await getFavItens("@appreceitas")
      if (isActive) {
        setReceipes(receipesFav)
      }
    }
    if (isActive) {
      getReceipes()
    }

    return () => {
      isActive = false
    }
  }, [isFocused])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Receitas favoritas </Text>

      {receipes.length === 0 && (
        <Text> Você ainda não adicionou nenhuma receita como favorita... </Text>
      )}

      <FlatList
        data={receipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodCard data={item} />}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 14 }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingHorizontal: 14,
    paddingTop: 36,
  },
  title: {
    fontWeight: 700,
    fontSize: 24,
    color: "#000000",
  },
})
