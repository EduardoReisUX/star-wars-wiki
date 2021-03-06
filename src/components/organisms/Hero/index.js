import React, { useEffect, useState } from 'react'
import {
  HeroContainer,
  HeroImageBackground,
  HeroGradient,
  ButtonsView,
  ButtonItemView,
} from './styles'
import {
  Text,
  Logo,
  Tag,
  IconButton,
  PlayButton,
  FavoriteStateModal,
} from '~/components'
import { colors } from '~/styles/colors'
import { useFavorites } from '~/services/hooks'
import { useDataStore } from '~/services/stores'
import { useNavigation } from '@react-navigation/core'

export const Hero = ({ item, onDetail }) => {
  const navigation = useNavigation()
  const { setSelectedData } = useDataStore()

  const [showFavoriteModal, setShowFavoriteModal] = useState(null)
  const [isFavorite, setIsFavorite] = useState(false)
  const { getFavorites, addFavorite, removeFavorite } = useFavorites()
  const { image_url, title, subtitle, type } = item

  const checkIsFavorite = async () => {
    const favorites = await getFavorites()
    const isInFavorite = favorites.filter(
      (fv) => fv.id === item.id && fv.type === item.type
    )
    setIsFavorite(isInFavorite.length > 0)
  }

  const closeFavoriteModal = () => {
    setTimeout(() => {
      setShowFavoriteModal(null)
    }, 1000)
  }

  const addDataToFavorite = async () => {
    await addFavorite(item)
    setShowFavoriteModal('added')
    checkIsFavorite()
    closeFavoriteModal()
  }

  const removeDataFromFavorite = async () => {
    await removeFavorite(item)
    setShowFavoriteModal('removed')
    checkIsFavorite()
    closeFavoriteModal()
  }

  const onPressDetail = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  const onPressWatch = () => {
    setSelectedData(item)
    navigation.navigate('Watch')
  }

  useEffect(() => {
    checkIsFavorite()
  }, [])

  return (
    <HeroContainer>
      <HeroImageBackground
        source={{
          uri: image_url,
        }}
      >
        <HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}
          <Tag
            width={type === 'Characters' ? 102 : 64}
            mt={onDetail ? 224 : 197.5}
          >
            {type}
          </Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>
          <ButtonsView>
            <ButtonItemView align="flex-start">
              <IconButton
                onPress={() =>
                  isFavorite ? removeDataFromFavorite() : addDataToFavorite()
                }
                label={isFavorite ? 'Remover favorito' : 'Add favorito'}
                iconName={
                  isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
                }
              />
            </ButtonItemView>

            {!onDetail && (
              <ButtonItemView>
                <PlayButton onPress={onPressWatch} />
              </ButtonItemView>
            )}

            <ButtonItemView align="flex-end">
              {!onDetail && (
                <IconButton
                  onPress={onPressDetail}
                  label="Saiba mais"
                  iconName="information-circle-outline"
                />
              )}
            </ButtonItemView>
          </ButtonsView>
        </HeroGradient>
      </HeroImageBackground>

      {!!showFavoriteModal && (
        <FavoriteStateModal
          type={showFavoriteModal}
          visible={!!showFavoriteModal}
          onClose={() => showFavoriteModal(null)}
        />
      )}
    </HeroContainer>
  )
}
