import { Ionicons, AntDesign } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'
import { useEffect, useState } from 'react'
import { Image, ScrollView, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useInput } from 'src/hooks'
import { useGetCategoriesQuery } from 'src/store/categories/api'
import {
  deleteIngredient,
  editIngredient,
  emptyIngredients,
  setIngredients,
} from 'src/store/ingredients/ingredients.slice'
import { useCreateOrUpdateRecipeMutation, useDeleteRecipeMutation } from 'src/store/recipes/api'
import { useUpdateUserMutation } from 'src/store/users/api'
import { addRecipe, removeRecipe } from 'src/store/users/users.slice'
import { COLORS } from 'src/themes'
import { Recipe, User, Ingredient, Category } from 'src/types'
import { transformQuantity, transformUnit } from 'src/utils'

import { styles } from './styles'
import Button from '../../common/button'
import ConfirmModal from '../../common/confirm-modal'
import Input from '../../common/input'
import Typography from '../../common/typography'
import SelectImageModal from '../../image-selector/select-image-modal'
import EditIngredientModal from '../../ingredients/edit-ingredient-modal'

type Props = {
  navigation: any
  recipe?: Recipe
}

const RecipeForm = ({ navigation, recipe }: Props) => {
  const dispatch = useDispatch()
  const [createOrUpdateRecipe] = useCreateOrUpdateRecipeMutation()
  const [deleteRecipeById] = useDeleteRecipeMutation()

  const [updateUser] = useUpdateUserMutation()
  const ingredients: Ingredient[] = useSelector(({ ingredients }) => ingredients.selected)
  const author: User = useSelector(({ users }) => users.current)
  const { localId } = useSelector(({ auth }) => auth.value)
  const allUnits: string[] = useSelector(({ ingredients }) => ingredients.allUnits)

  const { data } = useGetCategoriesQuery(null)

  const name = useInput()
  const description = useInput()

  const [image, setImage] = useState('')
  const [steps, setSteps] = useState<{ id: number; step: string }[]>([{ id: 1, step: '' }])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [modalVisible, setModalVisible] = useState(false)
  const [imageModalVisible, setImageModalVisible] = useState(false)
  const [confirmModalVisible, setConfirmModalVisible] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null)

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

  useEffect(() => {
    if (recipe) {
      name.setValue(recipe.name)
      description.setValue(recipe.description)
      setSteps(recipe.steps)
      setSelectedCategory(recipe.categoryId)
      setImage(recipe.image)
      dispatch(setIngredients(recipe.ingredients))
    }
  }, [recipe])

  const addStep = () => {
    setSteps((prev) => prev.concat({ id: prev[prev.length - 1]?.id + 1 || 1, step: '' }))
  }

  const changeStep = (id: number, text: string) => {
    setSteps((prev) => prev.map((step) => (step.id === id ? { ...step, step: text } : step)))
  }

  const removeStep = (stepId: number) => {
    setSteps((prev) => prev.filter(({ id }) => id !== stepId))
  }

  const handleEditIngredient = (ingredient: Ingredient) => {
    setSelectedIngredient(ingredient)
    setModalVisible(true)
  }

  const handleUpdateIngredient = (ingredient: Ingredient) => {
    dispatch(editIngredient({ ingredient }))
    setModalVisible(false)
  }

  const handleRemoveIngredient = (ingredient: string) => {
    dispatch(deleteIngredient({ ingredient }))
  }

  const handleCreate = async () => {
    const recipe: Recipe = {
      id: String(Math.floor(Math.random() * 10000) + 1),
      name: name.value,
      image,
      description: description.value,
      ingredients,
      steps,
      categoryId: selectedCategory,
      authorId: author.localId,
      createdAt: Date.now(),
    }
    dispatch(addRecipe({ id: recipe.id }))
    await createOrUpdateRecipe(recipe)
    await updateUser({
      localId,
      recipes: author.recipes?.length ? [...author.recipes, recipe.id] : [recipe.id],
    })
  }

  const handleUpdate = async () => {
    if (!recipe) return

    const updatedRecipe: Recipe = {
      ...recipe,
      name: name.value,
      image: image ? image : recipe.image,
      description: description.value,
      ingredients,
      steps,
      categoryId: selectedCategory,
    }

    await createOrUpdateRecipe(updatedRecipe)
  }

  const handleSubmit = () => {
    if (recipe) {
      handleUpdate()
    } else {
      handleCreate()
    }
    dispatch(emptyIngredients())
    navigation.goBack()
  }

  const deleteRecipe = async () => {
    if (!recipe) return

    const updatedUser = {
      localId,
      recipes: author.recipes.filter((r) => r !== recipe.id),
    }

    dispatch(removeRecipe(recipe.id))
    await deleteRecipeById(recipe.id)
    await updateUser(updatedUser)
    setConfirmModalVisible(false)
    navigation.navigate('Profile')
  }

  const isFormValid =
    name.value !== '' &&
    description.value !== '' &&
    ingredients.length > 0 &&
    steps.length > 0 &&
    selectedCategory !== '' &&
    image !== ''

  if (!data) return

  const categories: Category[] = data

  return (
    <>
      <SelectImageModal
        openModal={imageModalVisible}
        setOpenModal={setImageModalVisible}
        pickCameraImage={pickCameraImage}
        pickGalleryImage={pickGalleryImage}
      />
      <EditIngredientModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedIngredient={selectedIngredient}
        handleUpdate={handleUpdateIngredient}
        allUnits={allUnits}
      />
      <ConfirmModal
        modalVisible={confirmModalVisible}
        setModalVisible={setConfirmModalVisible}
        confirmFunction={deleteRecipe}
        message="¿Desea eliminar esta receta?"
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}>
        <View style={styles.fieldContainer}>
          <Typography variant="semibold" size={18}>
            Título
          </Typography>
          <Input placeholder="Dale un nombre a tu receta" {...name} />
        </View>
        <View style={styles.fieldContainer}>
          <Typography variant="semibold" size={18}>
            Imagen
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
          <Typography variant="semibold" size={18}>
            Descripción
          </Typography>
          <Input
            placeholder="Escribe una breve descripción para tu receta"
            multiline
            {...description}
          />
        </View>
        <View style={styles.fieldContainer}>
          <Typography variant="semibold" size={18}>
            Ingredientes
          </Typography>
          <View>
            <TouchableOpacity
              style={styles.searchIngredients}
              onPress={() => navigation.navigate('Ingredients')}>
              <Ionicons name="search" size={25} color={COLORS.darkGray} />
              <Typography color="gray">Escribe ingredientes</Typography>
            </TouchableOpacity>
          </View>
          <View>
            {ingredients.map(({ ingredient, quantity, unit, units }) => (
              <View style={styles.ingredient} key={ingredient}>
                <View>
                  {/* <Image /> */}
                  <View>
                    <Typography variant="semibold" size={16}>
                      {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                    </Typography>
                    <Typography variant="light">
                      {transformQuantity(quantity)} {transformUnit(unit, quantity)}
                    </Typography>
                  </View>
                </View>
                <View style={styles.iconsContainer}>
                  <TouchableOpacity onPress={() => handleRemoveIngredient(ingredient)}>
                    <Ionicons name="trash" size={25} color={COLORS.black} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => handleEditIngredient({ ingredient, quantity, units, unit })}>
                    <AntDesign name="edit" size={25} color={COLORS.black} />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.fieldContainer}>
          <Typography variant="semibold" size={18}>
            Instrucciones
          </Typography>
          {steps.map(({ id, step }, idx) => (
            <View key={id} style={styles.steps}>
              <View style={styles.step}>
                <Typography variant="semibold" size={18}>
                  {idx + 1}
                </Typography>
                <View style={styles.stepInput}>
                  <Input
                    placeholder={`Añade el paso ${idx + 1}`}
                    multiline
                    onChangeText={(text) => changeStep(id, text)}
                    value={step}
                  />
                </View>
                <TouchableOpacity onPress={() => removeStep(id)}>
                  <Ionicons name="trash" size={25} color={COLORS.black} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
          <Button onPress={addStep} variant="primary">
            Añadir paso
          </Button>
        </View>
        <View style={styles.fieldContainer}>
          <Typography variant="semibold" size={18}>
            Categoría
          </Typography>
          <View>
            <View style={styles.categoriesContainer}>
              {categories?.map(({ id, name, backgroundImage }) => (
                <Button
                  key={id}
                  variant={selectedCategory === id ? 'primary' : 'white'}
                  marginTop={5}
                  onPress={() => setSelectedCategory(id)}>
                  {name}
                </Button>
              ))}
            </View>
          </View>
        </View>
        {isFormValid ? (
          <Button variant="primary" fontSize={16} fontWeight="medium" onPress={handleSubmit}>
            Guardar cambios
          </Button>
        ) : (
          <Button variant="disabled" fontSize={16} fontWeight="medium" onPress={() => {}}>
            Guardar cambios
          </Button>
        )}
        {recipe && (
          <Button variant="delete" onPress={() => setConfirmModalVisible(true)}>
            Eliminar receta
          </Button>
        )}
      </ScrollView>
    </>
  )
}

export default RecipeForm
