import { Modal, ScrollView, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { addToList } from 'src/store/users/users.slice'
import { User } from 'src/types'

import { styles } from './styles'
import Typography from '../typography'
import UserRecipeListButton from '../user-recipe-list-button'

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

  const saveRecipe = (listName: string) => {
    dispatch(addToList({ id: selectedRecipe, listName }))
    setModalVisible(false)
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
          recipesLength={user.favorites.length}
          title="Mis favoritas"
        />
        {user.lists.map(({ name, recipes }) => (
          <UserRecipeListButton
            key={name}
            title={name}
            onPress={() => saveRecipe(name)}
            icon="star"
            recipesLength={recipes.length}
          />
        ))}
      </ScrollView>
    </Modal>
  )
}

export default SaveRecipeModal
