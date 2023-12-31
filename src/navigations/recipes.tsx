import { createStackNavigator } from '@react-navigation/stack'
import { Header, HeaderArrow } from 'src/components'
import { CreateRating, Home, RecipeDetailContainer, Recipes } from 'src/screens'
import { HomeParamList } from 'src/types'

const Stack = createStackNavigator<HomeParamList>()

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
        component={RecipeDetailContainer}
        options={({ navigation, route }) => ({
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => <HeaderArrow goBack={navigation.goBack} />,
        })}
      />
      <Stack.Screen
        name="CreateRating"
        component={CreateRating}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header title="Deja tu reseña" />,
          headerTitleAlign: 'center',
          headerLeft: () => <HeaderArrow goBack={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  )
}
