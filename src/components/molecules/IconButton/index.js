import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '~/components'
import { ButtonContainer } from './styles'
import { theme } from '~/styles/theme'

export const IconButton = ({ iconName, label, onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <Text fontFamily="semiBold" size={10}>
        {label}
      </Text>
    </ButtonContainer>
  )
}
