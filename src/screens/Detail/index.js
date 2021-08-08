import React from 'react'
import { Hero, ScreenScrollContainer, GoBack, Text } from '~/components'
import { useDataStore } from '~/services/stores'

export const Detail = () => {
  const { selectedData } = useDataStore()

  return (
    <ScreenScrollContainer>
      <Hero item={selectedData} onDetail />
      <Text ml={24} fontFamily="black" size={18}>
        Descrição
      </Text>
      <Text mt={12} ml={24} mr={24} size={16} lh={16 * 1.8}>
        {selectedData.description}
      </Text>
      <GoBack />
    </ScreenScrollContainer>
  )
}
