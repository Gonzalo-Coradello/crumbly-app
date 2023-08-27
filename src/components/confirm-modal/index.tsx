import { Modal, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'

import { styles } from './styles'
import Typography from '../typography'

type Props = {
  modalVisible: boolean
  setModalVisible: (visible: boolean) => void
  confirmFunction: () => void
  message: string
}

const ConfirmModal = ({ modalVisible, setModalVisible, confirmFunction, message }: Props) => {
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
      <View style={styles.modalContainer}>
        <Typography variant="semibold" size={20} centered>
          {message}
        </Typography>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
            <Typography color="white" variant="medium" size={14}>
              Cancelar
            </Typography>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={confirmFunction}>
            <Typography color="white" variant="medium" size={14}>
              Confirmar
            </Typography>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default ConfirmModal
