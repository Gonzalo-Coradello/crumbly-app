import { Modal, TouchableWithoutFeedback, View } from 'react-native'

import { styles } from './styles'
import Button from '../button'
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
          <Button
            variant="primary"
            fontWeight="medium"
            marginTop={0}
            onPress={() => setModalVisible(false)}>
            Cancelar
          </Button>
          <Button variant="primary" fontWeight="medium" marginTop={0} onPress={confirmFunction}>
            Confirmar
          </Button>
        </View>
      </View>
    </Modal>
  )
}

export default ConfirmModal
