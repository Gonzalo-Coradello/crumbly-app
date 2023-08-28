import { Ionicons } from '@expo/vector-icons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Header, HeaderArrow } from 'src/components'
import ConfirmModal from 'src/components/common/confirm-modal'
import {
  CreateList,
  CreateRecipe,
  ImageSelector,
  Profile,
  RecipeDetailContainer,
  Recipes,
} from 'src/screens'
import Ingredients from 'src/screens/ingredients'
import { useUpdateUserMutation } from 'src/store/users/api'
import { removeList } from 'src/store/users/users.slice'
import { ProfileParamList, User } from 'src/types'

const Stack = createNativeStackNavigator<ProfileParamList>()

export default function ProfileNavigator() {
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()
  const user: User = useSelector(({ users }) => users.current)
  const [updateUser] = useUpdateUserMutation()

  const deleteList = async (listName: string, navigation: any) => {
    dispatch(removeList(listName))
    await updateUser({
      localId: user?.localId,
      lists: user.lists.filter((list) => list.name !== listName),
    })
    setModalVisible(false)
    navigation.navigate('Profile')
  }

  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerBackVisible: false }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation, route }) => ({
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
          headerRight: () =>
            route.params.list !== 'favorites' && route.params.list !== 'author' ? (
              <>
                <ConfirmModal
                  message="¿Estás seguro de que quieres eliminar esta lista?"
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible}
                  confirmFunction={() => deleteList(route.params.list, navigation)}
                />
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Ionicons name="trash-outline" size={25} />
                </TouchableOpacity>
              </>
            ) : null,
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
