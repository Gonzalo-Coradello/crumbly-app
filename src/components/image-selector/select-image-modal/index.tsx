import { View, Modal, TouchableWithoutFeedback } from 'react-native'

import { styles } from './styles'
import Button from '../../common/button'

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
        <Button
          variant="primary"
          fontWeight="medium"
          fullWidth
          marginTop={5}
          onPress={pickCameraImage}>
          Tomar foto
        </Button>
        <Button
          variant="primary"
          fontWeight="medium"
          fullWidth
          marginTop={5}
          onPress={pickGalleryImage}>
          Seleccionar desde la galería
        </Button>
      </View>
    </Modal>
  )
}

export default SelectImageModal
