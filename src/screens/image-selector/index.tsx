import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { View, Image } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button, SelectImageModal } from 'src/components'
import { setCameraImage } from 'src/store/auth/auth.slice'
import { useUpdateUserMutation } from 'src/store/users/api'

import { styles } from './styles'

const ImageSelector = ({ navigation }: any) => {
  const [image, setImage] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const dispatch = useDispatch()
  const { localId, image: profileImage } = useSelector(({ users }) => users.current)
  const [updateUser] = useUpdateUserMutation()

  const verifyCameraPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      return false
    }
    return true
  }

  const verifyGalleryPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) {
      return false
    }
    return true
  }

  const pickCameraImage = async () => {
    const isCameraOk = await verifyCameraPermission()
    if (isCameraOk) {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.5,
      })
      if (!result.canceled) {
        setOpenModal(false)
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }
  }

  const pickGalleryImage = async () => {
    const isGalleryOk = await verifyGalleryPermission()
    if (isGalleryOk) {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.5,
      })
      if (!result.canceled) {
        setOpenModal(false)
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }
  }

  const confirmImage = async () => {
    dispatch(setCameraImage(image))
    updateUser({ localId, image })
    navigation.goBack()
  }

  return (
    <>
      <SelectImageModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        pickCameraImage={pickCameraImage}
        pickGalleryImage={pickGalleryImage}
      />
      <View style={styles.container}>
        {image || profileImage ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: image || profileImage }} style={styles.image} />
          </View>
        ) : (
          <View style={styles.imageContainer}>
            <Ionicons name="person" size={160} />
          </View>
        )}
        {image ? (
          <View style={styles.buttonContainer}>
            <Button variant="primary" fontWeight="medium" onPress={() => setOpenModal(true)}>
              Elegir otra foto
            </Button>
            <Button variant="primary" fontWeight="medium" onPress={confirmImage}>
              Confirmar foto
            </Button>
          </View>
        ) : (
          <View style={styles.buttonContainer}>
            <Button variant="primary" fontWeight="medium" onPress={() => setOpenModal(true)}>
              Seleccionar foto
            </Button>
          </View>
        )}
      </View>
    </>
  )
}

export default ImageSelector
