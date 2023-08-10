import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header, HeaderArrow } from 'src/components'
import {
  CreateList,
  CreateRecipe,
  ImageSelector,
  Profile,
  RecipeDetailContainer,
  Recipes,
} from 'src/screens'
import Ingredients from 'src/screens/ingredients'
import { ProfileParamList } from 'src/types'

const Stack = createNativeStackNavigator<ProfileParamList>()

export default function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerBackVisible: false }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation, route }) => ({
          // headerShown: false,
          headerTitle: () => <Header title="Perfil" />,
          headerTitleAlign: 'center',
          headerLeft: () => null,
        })}
      />
      <Stack.Screen
        name="Recipes"
        component={Recipes}
        options={({ navigation, route }) => ({
          headerTitle: () => (
            <Header
              title={
                route.params.list === 'favorites'
                  ? 'Mis favoritas'
                  : route.params.list === 'author'
                  ? 'Mis recetas'
                  : route.params.list
              }
            />
          ),
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
        name="CreateList"
        component={CreateList}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header title="Crear lista" />,
          headerTitleAlign: 'center',
          headerLeft: () => <HeaderArrow goBack={navigation.goBack} />,
        })}
      />
      <Stack.Screen
        name="CreateRecipe"
        component={CreateRecipe}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header title="Crear receta" />,
          headerTitleAlign: 'center',
          headerLeft: () => <HeaderArrow goBack={navigation.goBack} />,
        })}
      />
      <Stack.Screen
        name="Ingredients"
        component={Ingredients}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header title="Ingredientes" />,
          headerTitleAlign: 'center',
          headerLeft: () => <HeaderArrow goBack={navigation.goBack} />,
        })}
      />
      <Stack.Screen
        name="ImagePicker"
        component={ImageSelector}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header title="Perfil" />,
          headerTitleAlign: 'center',
          headerLeft: () => <HeaderArrow goBack={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  )
}
