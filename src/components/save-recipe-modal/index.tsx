import { Modal, TouchableWithoutFeedback, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { addToFavorites } from 'src/store/users/users.slice'

import { styles } from './styles'
import Typography from '../typography'
import UserRecipeListButton from '../user-recipe-list-button'

type Props = {
  modalVisible: boolean
  setModalVisible: (visible: boolean) => void
  selectedRecipe: string
}

const SaveRecipeModal = ({ modalVisible, setModalVisible, selectedRecipe }: Props) => {
  const dispatch = useDispatch()

  const saveRecipe = () => {
    dispatch(addToFavorites(selectedRecipe))
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
      <View style={styles.contentContainer}>
        <Typography>Guardar receta en:</Typography>
        <UserRecipeListButton
          func={saveRecipe}
          icon="add-circle-outline"
          title="Crear una lista nueva"
        />
        <UserRecipeListButton
          func={saveRecipe}
          icon="star"
          recipesLength={1}
          title="Mis favoritas"
        />
      </View>
    </Modal>
  )
}

export default SaveRecipeModal
