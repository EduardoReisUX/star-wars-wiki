import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '~/components'
import { SeparatorView, NoDataImage } from './styles'
import { Text, Container } from '~/components'
import NoSearch from '../../../../assets/DarthVader.png'
import NoFavorites from '../../../../assets/Kylo.png'

export const GridList = ({ data, type, loading }) => {
  return (
    <FlatList
      refreshing={loading}
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card item={item} size="large" />}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <SeparatorView />}
      ListEmptyComponent={() => (
        <Container align="center" justify="center" h={500}>
          <NoDataImage
            resizeMode="contain"
            source={type === 'favorites' ? NoFavorites : NoSearch}
          />
          <Text fontFamily="semiBold" size={14} mt={12}>
            {`Nenhum ${
              type === 'favorites' ? 'favorito' : 'resultado'
            } encontrado.`}
          </Text>
        </Container>
      )}
    />
  )
}
