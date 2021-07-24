import AsyncStorage from '@react-native-async-storage/async-storage'

const DB_KEY = '@StarWarsWiki:favorites'

export const useFavorites = () => {
  const addFavorite = async (data) => {
    let newDb
    const value = await AsyncStorage.getItem(DB_KEY).catch((err) =>
      console.log(err)
    )

    if (value !== null) {
      const db = JSON.parse(value)
      newDb = [...db, data]
    } else {
      newDb = [data]
    }

    const jsonValue = JSON.stringify(newDb)
    await AsyncStorage.setItem(DB_KEY, jsonValue)

    return newDb
  }

  const getFavorites = async () => {
    const value = await AsyncStorage.getItem(DB_KEY).catch((err) =>
      console.log(err)
    )

    if (value !== null) {
      const db = JSON.parse(value)
      return db
    }
    return []
  }

  const removeFavorite = async (data) => {
    let newDb
    const value = await AsyncStorage.getItem(DB_KEY).catch((err) =>
      console.log(err)
    )

    if (value !== null) {
      const db = JSON.parse(value)
      newDb = db.filter((fv) => fv.id !== data.id && fv.title !== data.title)
    } else {
      newDb = []
    }

    const jsonValue = JSON.stringify(newDb)
    await AsyncStorage.setItem(DB_KEY, jsonValue)

    return newDb
  }

  return { addFavorite, getFavorites, removeFavorite }
}
