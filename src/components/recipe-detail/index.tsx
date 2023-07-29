import { Ionicons } from '@expo/vector-icons'
import { Image, ScrollView, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromList } from 'src/store/users/users.slice'
import { Recipe, User } from 'src/types'

import { styles } from './styles'
import Description from '../description'
import ProfileCircle from '../profile-circle'
import RecipeRater from '../recipe-rater'
import RecipeRating from '../recipe-rating'
import Typography from '../typography'

type Props = {
  recipeId: string
  user: User
  openModal: () => void
}

const RecipeDetail = ({ recipeId, user, openModal }: Props) => {
  const recipes: Recipe[] = useSelector(({ recipes }) => recipes.data)
  const recipe = recipes.find((recipe) => recipe.id === recipeId)

  const dispatch = useDispatch()

  const isFavorite = user.favorites.includes(recipeId)
  const isSaved = user.lists.find((list) => list.recipes.includes(recipeId))

  const remove = () => {
    dispatch(removeFromList({ id: recipeId, listName: isFavorite ? 'favorites' : isSaved?.name }))
  }

  const author = recipe?.fromCrumbly ? 'Crumbly' : 'Someone'

  if (!recipe) return null

  return (
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
            <Ionicons name="arrow-redo-outline" size={25} />
            {isFavorite || isSaved ? (
              <Ionicons name="bookmark" size={25} onPress={remove} />
            ) : (
              <Ionicons name="bookmark-outline" size={25} onPress={openModal} />
            )}
          </View>
        </View>
        <View style={styles.recipeInfo}>
          <View style={styles.author}>
            <ProfileCircle size={45} crumbly={recipe.fromCrumbly} />
            <Typography variant="semibold" size={18}>
              {author}
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
                  {quantity} {unit}
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
  )
}

export default RecipeDetail
