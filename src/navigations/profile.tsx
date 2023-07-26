import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header, HeaderArrow } from 'src/components'
import { CreateList, CreateRecipe, Profile, RecipeDetailContainer, Recipes } from 'src/screens'
import { ProfileParamList } from 'src/types'

const Stack = createNativeStackNavigator<ProfileParamList>()

export default function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
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
          headerTitle: () => <Header title="Perfil" />,
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
          headerLeft: () => <HeaderArrow goBack={navigation.goBack} />,
        })}
      />
    </Stack.Navigator>
  )
}
