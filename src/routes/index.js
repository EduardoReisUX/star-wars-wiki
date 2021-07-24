import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
  Home,
  SplashScreen,
  Detail,
  SearchScreen,
  FavoriteScreen,
} from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomBar } from '~/components'
import { Ionicons } from '@expo/vector-icons'

const BottomRoute = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator tabBar={(props) => <BottomBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        options={{ tabBarLabel: 'Pesquisar' }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{ tabBarLabel: 'Favoritos' }}
        name="Favorite"
        component={FavoriteScreen}
      />
    </Tab.Navigator>
  )
}

export const Routes = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={BottomRoute} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
