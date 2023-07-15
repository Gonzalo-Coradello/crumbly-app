import { createStackNavigator } from '@react-navigation/stack'
import { Home, RecipeDetail, Recipes } from 'src/screens'
import { RecipesParamList } from 'src/types'

const Stack = createStackNavigator<RecipesParamList>()

export default function RecipesNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Recipes"
        component={Recipes}
        options={({ navigation, route }) => ({ title: route.params.category })}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={({ navigation, route }) => ({ title: route.params.recipeName })}
      />
    </Stack.Navigator>
  )
}
