import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '~/components'
import { ButtonContainer } from './styles'
import { theme } from '~/styles/theme'

export const IconButton = ({ iconName, label, onPress }) => {
  return (
    <ButtonContainer>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <Text fontFamily="bold" size={10} mt={6}>
        {label}
      </Text>
    </ButtonContainer>
  )
}
