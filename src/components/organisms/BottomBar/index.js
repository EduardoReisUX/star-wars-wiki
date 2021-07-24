import React from 'react'
import { BottomBarContainer, BarItem } from './styles'
import { Text } from '~/components'
import { theme } from '~/styles'
import { Ionicons } from '@expo/vector-icons'

const routeIcons = {
  // Home: ['home', 'home-outline'],
  Home: 'home-outline',
  Search: 'search-outline',
  Favorite: 'heart-outline',
}

export const BottomBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <BottomBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <BarItem
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Ionicons
              name={
                //isFocused
                //? routeIcons[route.name[0]] <- filled version of icon when focused (home, heart, search)
                routeIcons[route.name]
              }
              color={isFocused ? theme.colors.red : theme.colors.white}
              size={theme.metrics.px(20)}
            />
            <Text
              fontFamily="semiBold"
              size={10}
              color={isFocused ? 'red' : 'white'}
            >
              {label}
            </Text>
          </BarItem>
        )
      })}
    </BottomBarContainer>
  )
}
