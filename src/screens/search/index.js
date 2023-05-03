import { useEffect, useState } from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import { useRoute } from "@react-navigation/native"

import api from "../../services/api"

import { FoodCard } from "../../components/foodcard"

export function Search() {
  const route = useRoute()
  const [receitas, setReceitas] = useState([])

  useEffect(() => {
    async function getReceipe() {
      const { data } = await api.get(`/foods/${route.params?.name}`)
      setReceitas(data)
    }
    getReceipe()
  }, [route.params?.name])

  console.log(receitas)
  return (
    <View style={styles.container}>
      <FlatList
        data={receitas}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <FoodCard data={item} />}
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 14 }}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            {" "}
            Ops não encontramos sua receita...{" "}
          </Text>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F9FF",
    paddingHorizontal: 14,
    paddingTop: 36,
  },
  emptyText: {
    fontWeight: 400,
    fontSize: 16,
    color: "#000000",
  },
})
