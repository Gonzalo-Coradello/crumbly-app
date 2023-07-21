import { createStackNavigator } from '@react-navigation/stack'
import { Header, HeaderArrow } from 'src/components'
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
          headerLeft: () => <HeaderArrow goBack={navigation.goBack} />,
        })}
      />
      <Stack.Screen
        name="RecipeDetail"
        component={RecipeDetail}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header title={route.params.category} />,
          headerTitleAlign: 'center',
          headerLeft: () => <HeaderArrow goBack={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  )
}
