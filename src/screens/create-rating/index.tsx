import { Ionicons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Button, Input, SelectImageModal, Typography } from 'src/components'
import RecipeRater from 'src/components/ratings/recipe-rater'
import { useInput } from 'src/hooks'
import { useCreateReviewMutation } from 'src/store/reviews/api'
import { Review } from 'src/types'

import { styles } from './styles'

const CreateRating = ({ navigation, route }: any) => {
  const { recipeId, selectedRating } = route.params
  const { reset, setValue, ...review } = useInput()
  const [imageModalVisible, setImageModalVisible] = useState(false)
  const [rating, setRating] = useState(selectedRating)
  const [image, setImage] = useState('')
  const { localId: userId } = useSelector(({ users }) => users.current)

  const [createReview] = useCreateReviewMutation()

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
        setImageModalVisible(false)
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
        setImageModalVisible(false)
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`)
      }
    }
  }

  const handleSubmit = async () => {
    const newReview: Review = {
      id: String(Math.floor(Math.random() * 10000) + 1),
      recipeId,
      userId,
      rating,
      image,
      review: review.value,
      createdAt: Date.now(),
    }

    await createReview(newReview)
    reset()
    setImage('')
    navigation.goBack()
  }

  return (
    <>
      <SelectImageModal
        openModal={imageModalVisible}
        setOpenModal={setImageModalVisible}
        pickCameraImage={pickCameraImage}
        pickGalleryImage={pickGalleryImage}
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.raterContainer}>
          <Typography variant="semibold" size={20} centered>
            ¿Te ha gustado la receta?
          </Typography>
          <RecipeRater selected={rating} fn={setRating} />
        </View>
        <View style={styles.fieldContainer}>
          <Typography variant="medium" size={18} centered>
            ¡Comparte una foto!
          </Typography>
          <TouchableOpacity
            style={image ? styles.imageButton : [styles.imageButton, styles.imageButtonSmall]}
            onPress={() => setImageModalVisible(true)}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Ionicons name="add" size={25} color="black" />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <View>
            <Typography variant="medium" size={18} centered>
              ¿Qué te ha parecido la receta?
            </Typography>
            <Typography variant="medium" size={18} centered>
              Deja tus comentarios
            </Typography>
          </View>
          <Input placeholder="Escribe tu opinión sobre la receta" multiline {...review} />
        </View>
        {rating > 0 ? (
          <Button
            fullWidth
            variant="primary"
            fontSize={16}
            fontWeight="medium"
            onPress={handleSubmit}>
            Enviar
          </Button>
        ) : (
          <Button fullWidth variant="disabled" fontSize={16} fontWeight="medium" onPress={() => {}}>
            Enviar
          </Button>
        )}
      </ScrollView>
    </>
  )
}

export default CreateRating
