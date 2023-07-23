import { Ionicons } from '@expo/vector-icons'
import { Image, ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Recipe } from 'src/types'

import { styles } from './styles'
import ProfileCircle from '../profile-circle'
import RecipeRater from '../recipe-rater'
import RecipeRating from '../recipe-rating'
import Typography from '../typography'

type Props = {
  recipeId: string
}

const RecipeDetail = ({ recipeId }: Props) => {
  const recipes: Recipe[] = useSelector(({ recipes }) => recipes.data)
  const recipe = recipes.find((recipe) => recipe.id === recipeId)

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
            <Ionicons name="bookmark-outline" size={25} />
          </View>
        </View>
        <View style={styles.recipeInfo}>
          <View style={styles.author}>
            <ProfileCircle size={60} crumbly={recipe.fromCrumbly} />
            <Typography variant="semibold" size={20}>
              {recipe?.authorId}
            </Typography>
          </View>
          <Typography variant="light" size={16} centered style={styles.description}>
            {recipe.description}
          </Typography>
        </View>
        <View style={styles.recipe}>
          <Typography variant="semibold" size={18}>
            Ingredientes
          </Typography>
          <View style={styles.ingredients}>
            {recipe?.ingredients.map(({ ingredient, quantity, unit }) => (
              <View style={styles.ingredient} key={ingredient}>
                <Typography>{ingredient}</Typography>
                <Typography>
                  {quantity} {unit}
                </Typography>
              </View>
            ))}
          </View>
          <Typography variant="semibold" size={18}>
            Pasos
          </Typography>
          <View style={styles.steps}>
            {recipe?.steps.map((step, idx) => (
              <View key={`step${idx}`} style={styles.step}>
                <Typography>{idx + 1}</Typography>
                <Typography>{step}</Typography>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.ratingContainer}>
          <Typography>¿Te ha gustado la receta?</Typography>
          <RecipeRater />
        </View>
        {recipe?.reviews?.length ? (
          <View>
            <Typography variant="semibold" size={18}>
              Valoraciones
            </Typography>
            {recipe.reviews.map((review) => (
              <View key={review}>
                <Typography>{review}</Typography>
              </View>
            ))}
          </View>
        ) : null}
      </View>
    </ScrollView>
  )
}

export default RecipeDetail
