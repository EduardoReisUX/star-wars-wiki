import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '~/components'
import { ButtonContainer } from './styles'
import { theme } from '~/styles/theme'

export const PlayButton = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(16)}
        color={theme.colors.black}
      />
      <Text fontFamily="bold" size={14} color={'black'} ml={4}>
        Assistir
      </Text>
    </ButtonContainer>
  )
}
