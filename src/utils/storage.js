import AsyncStorage from "@react-native-async-storage/async-storage"

export async function getFavItens(key) {
  const favs = await AsyncStorage.getItem(key)
  return JSON.parse(favs) || []
}

export async function favItem(key, newItem) {
  let myNewFav = await getFavItens(key)

  let hasItem = myNewFav.some((item) => item.id === myNewFav.id)

  if (hasItem) {
    console.log("THIS ITEM HAS IN FAVORITES LIST")
    return
  }

  myNewFav.push(newItem)

  await AsyncStorage.setItem(key, JSON.stringify(myNewFav)).then(
    console.log("Saved")
  )
}

export async function desfavItem(id) {
  let receipes = await getFavItens("@appreceitas")

  let myFav = receipes.filter((item) => {
    return item.id !== id
  })

  await AsyncStorage.setItem("@appreceitas", JSON.stringify(myFav)).then(
    console.log("Removed")
  )

  return myFav
}

export async function checkIsFav(receipe) {
  let myReceipes = await getFavItens("@appreceitas")

  const fav = myReceipes.find((item) => item.id === receipe.id)

  if (fav) {
    return true
  }

  return false
}
