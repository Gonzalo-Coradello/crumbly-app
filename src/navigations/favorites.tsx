import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header, HeaderArrow } from 'src/components'
import { Favorites, RecipeDetailContainer } from 'src/screens'
import { FavoritesParamList } from 'src/types'

const Stack = createNativeStackNavigator<FavoritesParamList>()

export default function FavoritesNavigator() {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerTitle: () => <Header title="Favoritos" />,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetailContainer}
        options={({ navigation }) => ({
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <HeaderArrow goBack={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  )
}
