import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, FONTS } from 'src/themes'

import FavoritesNavigator from './favorites'
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
          paddingTop: 5,
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
        name="FavoritesTab"
        component={FavoritesNavigator}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ focused, color, size }) => {
            return <FontAwesome name={focused ? 'star' : 'star-o'} size={22} color={color} />
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
