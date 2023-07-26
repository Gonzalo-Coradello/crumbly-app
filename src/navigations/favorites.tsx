import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header, HeaderArrow } from 'src/components'
import { RecipeDetailContainer, Recipes } from 'src/screens'
import { RecipesParamList } from 'src/types'

const Stack = createNativeStackNavigator<RecipesParamList>()

export default function FavoritesNavigator() {
  return (
    <Stack.Navigator initialRouteName="Recipes">
      <Stack.Screen
        name="Recipes"
        component={Recipes}
        initialParams={{ list: 'favorites' }}
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
