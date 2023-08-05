import { Ionicons, AntDesign } from '@expo/vector-icons'
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
import { useCreateOrUpdateRecipeMutation } from 'src/store/recipes/api'
import { addRecipe } from 'src/store/users/users.slice'
import { COLORS } from 'src/themes'
import { Recipe, User, Ingredient } from 'src/types'
import { transformQuantity, transformUnit } from 'src/utils'

import { styles } from './styles'
import EditIngredientModal from '../edit-ingredient-modal'
import Input from '../input'
import Typography from '../typography'

type Props = {
  navigation: any
  recipe?: Recipe
}

const RecipeForm = ({ navigation, recipe }: Props) => {
  const dispatch = useDispatch()

  const imageSelected = false

  const [createOrUpdateRecipe] = useCreateOrUpdateRecipeMutation()

  const ingredients: Ingredient[] = useSelector(({ ingredients }) => ingredients.selected)
  const author: User = useSelector(({ users }) => users.current)
  const { data: categories } = useGetCategoriesQuery(null)

  const name = useInput()
  const description = useInput()

  const [steps, setSteps] = useState<{ id: number; step: string }[]>([{ id: 1, step: '' }])
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null)

  useEffect(() => {
    if (recipe) {
      name.setValue(recipe.name)
      description.setValue(recipe.description)
      setSteps(recipe.steps)
      setSelectedCategory(recipe.categoryId)
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
      id: String(Math.floor(Math.random() * 1000) + 1),
      name: name.value,
      image:
        'https://s3-alpha-sig.figma.com/img/c453/9086/acfc1569c43903acc16df5065a241de3?Expires=1691366400&Signature=aDeRmKtgeUv3oPSfJykouIkrOGoDKTCkLH49CHuTdmlBBYgBr7bE1Wnz7VdkgmozJMe9k0bF-ANN9G8j2AZFl9CX1sV6QrTyHLjJMG7SogGOBvoiaHqU7CBl9VkrRaL8QFwrelh6sS6zCDU-FA6cpA1QsQzzJrAN0Dk~M~x7alfJTY3dltzdu-TOtuKhXgow1MsuViQx9j1lykHP-W-NHAiY2yWUlikHG9m1NxmRn49~SEMQ2OsdZWo7QsfHvCTACfAvFdxfc4yZyjO4uVBinwxo3xDFods8dIJ3eqjcKP25EiB5BZYaUZ74bU76WlJljpHvhNV27CRPKL02Qn12Iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      description: description.value,
      ingredients,
      steps,
      categoryId: selectedCategory,
      authorId: author.id,
      fromCrumbly: author.name === 'Crumbly',
      createdAt: Date.now(),
      reviews: [],
      ratings: [],
    }
    await createOrUpdateRecipe(recipe)
    dispatch(addRecipe({ id: recipe.id }))
  }

  const handleUpdate = async () => {
    if (!recipe) return

    const updatedRecipe: Recipe = {
      ...recipe,
      name: name.value,
      image:
        'https://s3-alpha-sig.figma.com/img/c453/9086/acfc1569c43903acc16df5065a241de3?Expires=1691366400&Signature=aDeRmKtgeUv3oPSfJykouIkrOGoDKTCkLH49CHuTdmlBBYgBr7bE1Wnz7VdkgmozJMe9k0bF-ANN9G8j2AZFl9CX1sV6QrTyHLjJMG7SogGOBvoiaHqU7CBl9VkrRaL8QFwrelh6sS6zCDU-FA6cpA1QsQzzJrAN0Dk~M~x7alfJTY3dltzdu-TOtuKhXgow1MsuViQx9j1lykHP-W-NHAiY2yWUlikHG9m1NxmRn49~SEMQ2OsdZWo7QsfHvCTACfAvFdxfc4yZyjO4uVBinwxo3xDFods8dIJ3eqjcKP25EiB5BZYaUZ74bU76WlJljpHvhNV27CRPKL02Qn12Iw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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

  return (
    <>
      <EditIngredientModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedIngredient={selectedIngredient}
        handleUpdate={handleUpdateIngredient}
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
          <TouchableOpacity style={styles.imageButton}>
            {imageSelected ? (
              <Image source={{}} />
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
                      {ingredient}
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
          <TouchableOpacity style={styles.button} onPress={addStep}>
            <Typography color="white">Añadir paso</Typography>
          </TouchableOpacity>
        </View>
        <View style={styles.fieldContainer}>
          <Typography variant="semibold" size={18}>
            Categoría
          </Typography>
          <View>
            <View style={styles.categoriesContainer}>
              {categories?.map(({ id, name, backgroundImage }) => (
                <TouchableOpacity
                  style={
                    selectedCategory === id
                      ? [styles.category, styles.selectedCategory]
                      : styles.category
                  }
                  key={id}
                  onPress={() => setSelectedCategory(id)}>
                  {/* <ImageBackground source={{ uri: backgroundImage }}> */}
                  <Typography color={selectedCategory === id ? 'white' : 'black'}>
                    {name}
                  </Typography>
                  {/* </ImageBackground> */}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Typography variant="medium" color="white" size={16}>
            Guardar cambios
          </Typography>
        </TouchableOpacity>
      </ScrollView>
    </>
  )
}

export default RecipeForm
