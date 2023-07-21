import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, FONTS } from 'src/themes'

import ProfileNavigator from './profile'
import RecipesNavigator from './recipes'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: FONTS.regular,
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: COLORS.white,
          paddingTop: 10,
        },
        tabBarActiveTintColor: COLORS.black,
        tabBarInactiveTintColor: COLORS.gray,
      }}>
      <Tab.Screen
        name="RecipeTab"
        component={RecipesNavigator}
        options={{
          tabBarLabel: 'Recetas',
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={focused ? 'home' : 'home-outline'} size={22} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ focused, color, size }) => {
            return <Ionicons name={focused ? 'person' : 'person-outline'} size={22} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}
