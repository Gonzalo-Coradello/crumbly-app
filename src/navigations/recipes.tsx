import { createStackNavigator } from '@react-navigation/stack'
import { Header } from 'src/components'
import { Home, RecipeDetail, Recipes } from 'src/screens'
import { RecipesParamList } from 'src/types'

const Stack = createStackNavigator<RecipesParamList>()

export default function RecipesNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen
        name="Recipes"
        component={Recipes}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header title={route.params.category} />,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header title={route.params.recipeName} />,
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  )
}
