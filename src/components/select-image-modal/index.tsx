import { View, Modal, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'

import { styles } from './styles'
import Typography from '../typography'

type Props = {
  openModal: boolean
  setOpenModal: (bool: boolean) => void
  pickCameraImage: () => void
  pickGalleryImage: () => void
}

const SelectImageModal = ({
  openModal,
  setOpenModal,
  pickCameraImage,
  pickGalleryImage,
}: Props) => {
  return (
    <Modal
      transparent
      visible={openModal}
      animationType="fade"
      onRequestClose={() => {
        setOpenModal(!openModal)
      }}>
      <TouchableWithoutFeedback onPress={() => setOpenModal(false)}>
        <View style={styles.container} />
      </TouchableWithoutFeedback>
      <View style={styles.modalContainer}>
        <TouchableOpacity style={styles.button} onPress={pickCameraImage}>
          <Typography color="white" variant="medium" centered size={14}>
            Tomar foto
          </Typography>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={pickGalleryImage}>
          <Typography color="white" variant="medium" centered size={14}>
            Seleccionar desde la galería
          </Typography>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default SelectImageModal
