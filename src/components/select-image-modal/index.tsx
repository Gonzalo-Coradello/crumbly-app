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
        {/* <Typography>¿De dónde quieres seleccionar la foto?</Typography> */}
        <TouchableOpacity onPress={pickCameraImage}>
          <Typography>Tomar foto</Typography>
        </TouchableOpacity>
        <TouchableOpacity onPress={pickGalleryImage}>
          <Typography>Seleccionar desde la galería</Typography>
        </TouchableOpacity>
      </View>
    </Modal>
  )
}

export default SelectImageModal
