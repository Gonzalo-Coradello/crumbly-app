import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { Image, ScrollView, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { useGetUserByIdQuery, useUpdateUserMutation } from 'src/store/users/api'
import { removeFromList } from 'src/store/users/users.slice'
import { Recipe, User } from 'src/types'
import { transformQuantity, transformUnit } from 'src/utils'

import { styles } from './styles'
import ConfirmModal from '../confirm-modal'
import Description from '../description'
import Loader from '../loader'
import ProfileCircle from '../profile-circle'
import RecipeRater from '../recipe-rater'
import RecipeRating from '../recipe-rating'
import Typography from '../typography'

type Props = {
  recipe: Recipe
  user: User
  openModal: () => void
  navigation: any
}

const RecipeDetail = ({ recipe, user, openModal, navigation }: Props) => {
  const dispatch = useDispatch()

  const [modalVisible, setModalVisible] = useState(false)
  const { data: author, isLoading, isError } = useGetUserByIdQuery(recipe?.authorId)
  const [updateUser] = useUpdateUserMutation()

  const isFavorite = user.favorites?.includes(recipe?.id)
  const isSaved = user.lists.find((list) => list.recipes?.includes(recipe?.id))

  const remove = async () => {
    dispatch(removeFromList({ id: recipe.id, listName: isFavorite ? 'favorites' : isSaved?.name }))
    if (isFavorite) {
      const updatedFavorites = user.favorites.filter((r) => r !== recipe?.id)
      await updateUser({ localId: user.localId, favorites: updatedFavorites })
    } else {
      const updatedList = {
        name: isSaved?.name,
        recipes: isSaved?.recipes.filter((r) => r !== recipe?.id),
      }
      const updatedLists = user.lists.map((l) => (l.name === isSaved?.name ? updatedList : l))
      await updateUser({ localId: user.localId, lists: updatedLists })
    }
    setModalVisible(false)
  }

  const handleEdit = () => {
    navigation.navigate('ProfileTab', { screen: 'CreateRecipe', params: { recipe } })
  }

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return (
      <View>
        <Typography>Ha ocurrido un error</Typography>
      </View>
    )
  }

  if (!recipe) return null

  return (
    <>
      <ConfirmModal
        confirmFunction={remove}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        message={`¿Desea eliminar esta receta de ${isFavorite ? 'tus favoritos' : isSaved?.name}?`}
      />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        overScrollMode="never">
        <Image source={{ uri: recipe?.image }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Typography size={25} variant="bold" centered>
            {recipe?.name}
          </Typography>
          <View style={styles.row}>
            <RecipeRating ratings={recipe.ratings} />
            <View style={styles.iconsContainer}>
              {recipe.authorId === author?.localId && (
                <AntDesign name="edit" size={25} onPress={handleEdit} />
              )}
              <Ionicons name="arrow-redo-outline" size={25} />
              {isFavorite || isSaved ? (
                <Ionicons name="bookmark" size={25} onPress={() => setModalVisible(true)} />
              ) : (
                <Ionicons name="bookmark-outline" size={25} onPress={openModal} />
              )}
            </View>
          </View>
          <View style={styles.recipeInfo}>
            <View style={styles.author}>
              <ProfileCircle size={45} picture={author?.image} />
              <Typography variant="semibold" size={18}>
                {author?.name}
              </Typography>
            </View>
            <View style={styles.description}>
              <Description text={recipe.description} />
            </View>
          </View>
          <View style={styles.recipe}>
            <Typography variant="semibold" size={18}>
              Ingredientes
            </Typography>
            <View style={styles.ingredients}>
              {recipe?.ingredients.map(({ ingredient, quantity, unit }) => (
                <View style={styles.ingredient} key={ingredient}>
                  <Typography variant="semibold" size={15}>
                    {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}
                  </Typography>
                  <Typography size={15}>
                    {transformQuantity(quantity)} {transformUnit(unit, quantity)}
                  </Typography>
                </View>
              ))}
            </View>
            <Typography variant="semibold" size={18}>
              Pasos
            </Typography>
            <View style={styles.steps}>
              {recipe?.steps.map(({ id, step }, idx) => (
                <View key={id} style={styles.step}>
                  <Typography variant="semibold" size={18}>
                    {idx + 1}
                  </Typography>
                  <Typography variant="light" size={15}>
                    {step}
                  </Typography>
                </View>
              ))}
            </View>
          </View>
          <View style={styles.ratingContainer}>
            <Typography variant="semibold" size={18}>
              ¿Te ha gustado la receta?
            </Typography>
            <RecipeRater />
          </View>
          <View>
            <Typography variant="semibold" size={18}>
              Valoraciones
            </Typography>
            {recipe.reviews?.length ? (
              recipe.reviews.map((review) => (
                <View key={review}>
                  <Typography>{review}</Typography>
                </View>
              ))
            ) : (
              <View style={styles.emptyReviews}>
                <Typography variant="light" size={15}>
                  Esta receta aún no tiene valoraciones.
                </Typography>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </>
  )
}

export default RecipeDetail
