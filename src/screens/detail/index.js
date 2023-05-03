import { useLayoutEffect, useState } from "react"
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Modal,
  Share,
} from "react-native"
import { useRoute, useNavigation } from "@react-navigation/native"

import { Entypo, AntDesign, Feather } from "@expo/vector-icons"
import { Ingredients } from "../../components/ingredients"
import { Instructions } from "../../components/instructions"
import { Video } from "../../components/video"

import {
  checkIsFav,
  desfavItem,
  favItem,
  getFavItens,
} from "../../utils/storage"

export function Detail() {
  const route = useRoute()
  const navigation = useNavigation()

  const [showModal, setShowModal] = useState(false)
  const [favorite, setFavorite] = useState(false)

  useLayoutEffect(() => {
    async function getStatusFromFavorites(params) {
      const receipeFavorites = await checkIsFav(route.params?.data)
      setFavorite(receipeFavorites)
    }

    getStatusFromFavorites()

    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da Receita",

      headerRight: () => (
        <Pressable onPress={() => createNewfavorite(route.params?.data)}>
          <Entypo
            name={favorite ? "heart" : "heart-outlined"}
            size={28}
            color="#ff4141"
          />
        </Pressable>
      ),
    })
  }, [navigation, route.params?.data, favorite])

  async function shareVideo() {
    try {
      await Share.share({
        url: "www.google.com",
        message: `😍 Olha essa receita de ${route.params?.data.name} que eu vi la no App de Receitas Fáceis!! 😍`,
      })
    } catch (error) {
      console.log(error)
    }
  }

  async function createNewfavorite(receipe) {
    if (favorite) {
      await desfavItem(receipe.id)
      setFavorite(false)
    } else {
      await favItem("@appreceitas", receipe)
      setFavorite(true)
    }
  }

  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Pressable onPress={() => setShowModal(true)}>
        <View style={styles.playBtn}>
          <AntDesign name="playcircleo" size={50} color="#ffffff" />
        </View>
        <Image
          source={{ uri: route.params?.data.cover }}
          style={styles.cover}
        />
      </Pressable>

      <View style={styles.headerDetails}>
        <View>
          <Text style={styles.headerDetailsName}>
            {route.params?.data.name}
          </Text>
          <Text style={styles.headerDetailsIngredients}>
            ingredientes ({route.params?.data.total_ingredients})
          </Text>
        </View>

        <Pressable onPress={shareVideo}>
          <Feather name="share-2" size={22} color="#121212" />
        </Pressable>
      </View>

      {route.params?.data.ingredients.map((item) => (
        <Ingredients key={item.id} data={item} />
      ))}

      <Text style={styles.preparoTitulo}>Modo de Preparo</Text>

      {route.params?.data.instructions.map((item, index) => (
        <Instructions key={item.id} data={item} index={index} />
      ))}

      <Modal visible={showModal} animationType="slide">
        <Video
          closeVideo={() => setShowModal(false)}
          videoUrl={route.params?.data.video}
        />
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F9FF",
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 17,
  },
  cover: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  playBtn: {
    position: "absolute",
    zIndex: 9,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  headerDetails: {
    marginBottom: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerDetailsName: {
    marginTop: 14,
    fontWeight: 700,
    fontSize: 18,
    color: "#000000",
  },
  headerDetailsIngredients: {
    marginTop: 8,
    fontWeight: 400,
    fontSize: 18,
    color: "#000000",
  },
  preparoTitulo: {
    paddingHorizontal: 11,
    paddingVertical: 7,
    backgroundColor: "#4CBE6C",
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 18,
    color: "#ffffff",
    marginBottom: 22,
  },
})
