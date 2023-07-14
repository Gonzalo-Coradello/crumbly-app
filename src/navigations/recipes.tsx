import { createStackNavigator } from '@react-navigation/stack'
import { Home, Recipes } from 'src/screens'
import { RecipesParamList } from 'src/types'

const Stack = createStackNavigator<RecipesParamList>()

export default function RecipesNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Recipes" component={Recipes} />
      {/* <Stack.Screen name="RecipeDetail" component={} /> */}
    </Stack.Navigator>
  )
}
