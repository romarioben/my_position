import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/Home'
import Rules from './screens/Rules'
import React from 'react'

export default function App() {
    const tabs = createBottomTabNavigator()
    const home = 'Accueil'
    const rule = 'Règles de confidentialité'
  return (
      <NavigationContainer>
          <tabs.Navigator
              initialRouteName={home}
              screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
                      let routName = route.name;

                      if (route.name === home) {
                          focused ? iconName = 'home' : iconName = 'home-outline'
                      }
                      else if (routName === rule) {
                          iconName = focused ? iconName = 'receipt' : iconName = 'receipt-outline'
                      }
                      return (
                          <Ionicons name={iconName} color={color} size={size} ></Ionicons>
                      )
                  }

              })} >
              <tabs.Screen name={home} component={Home} />
              <tabs.Screen name={rule} component={Rules} />
          </tabs.Navigator>
    </NavigationContainer>
  )
}
