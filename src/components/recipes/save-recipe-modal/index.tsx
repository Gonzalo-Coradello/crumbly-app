import { Modal, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useUpdateUserMutation } from 'src/store/users/api'
import { addToList } from 'src/store/users/users.slice'
import { User } from 'src/types'

import { styles } from './styles'
import Typography from '../../common/typography'
import UserRecipeListButton from '../../profile/user-recipe-list-button'

type Props = {
  modalVisible: boolean
  setModalVisible: (visible: boolean) => void
  selectedRecipe: string
  user: User
  navigation: any
}

const SaveRecipeModal = ({
  modalVisible,
  setModalVisible,
  selectedRecipe,
  user,
  navigation,
}: Props) => {
  const dispatch = useDispatch()
  const [updateUser] = useUpdateUserMutation()
  const { localId } = useSelector(({ auth }) => auth.value)

  const saveRecipe = async (listName: string) => {
    try {
      const updatedList =
        listName === 'favorites'
          ? {
              localId,
              favorites: user.favorites ? [...user.favorites, selectedRecipe] : [selectedRecipe],
            }
          : {
              localId,
              lists: user.lists?.map((list) =>
                list.name === listName
                  ? {
                      name: listName,
                      recipes: list.recipes ? [...list.recipes, selectedRecipe] : [selectedRecipe],
                    }
                  : list
              ),
            }

      dispatch(addToList({ id: selectedRecipe, listName }))
      await updateUser(updatedList)
      setModalVisible(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleNavigate = () => {
    navigation.navigate('ProfileTab', {
      screen: 'CreateList',
      params: { recipeId: selectedRecipe },
    })
    setModalVisible(false)
  }

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="fade"
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.container} />
      </TouchableWithoutFeedback>
      <ScrollView style={styles.modalContainer} contentContainerStyle={styles.contentContainer}>
        <Typography variant="semibold" size={20} centered>
          Guardar receta en:
        </Typography>
        <UserRecipeListButton
          onPress={handleNavigate}
          icon="add-circle-outline"
          title="Crear una lista nueva"
        />
        <UserRecipeListButton
          onPress={() => saveRecipe('favorites')}
          icon="star"
          recipesLength={user.favorites?.length}
          title="Mis favoritas"
        />
        {user.lists?.map(({ name, recipes }) => (
          <UserRecipeListButton
            key={name}
            title={name}
            onPress={() => saveRecipe(name)}
            icon="star"
            recipesLength={recipes?.length}
          />
        ))}
      </ScrollView>
    </Modal>
  )
}

export default SaveRecipeModal
