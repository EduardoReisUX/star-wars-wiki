import { api } from '../api'

export const useGetData = () => {
  const getFilms = async () => {
    const response = await api.get('/films').catch((err) => console.log(err))
    return response.data
  }

  const getCharacters = async () => {
    const response = await api
      .get('/characters')
      .catch((err) => console.log(err))
    return response.data
  }

  return { getFilms, getCharacters }
}
