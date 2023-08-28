import { FontAwesome } from '@expo/vector-icons'
import { View } from 'react-native'
import { COLORS } from 'src/themes'
import { Review } from 'src/types'

import { styles } from './styles'

type Props = {
  reviews?: Review[]
}

const RecipeRating = ({ reviews }: Props) => {
  if (!reviews)
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesome key={star} name="star-o" size={25} color={COLORS.yellow} />
        ))}
      </View>
    )

  const ratings = reviews.map((review) => review.rating)
  const rating = ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length
  const stars = [1, 2, 3, 4, 5].map((star) =>
    rating >= star ? (
      <FontAwesome key={star} name="star" size={25} color={COLORS.yellow} />
    ) : star - Math.floor(rating) === 1 && rating - Math.floor(rating) >= 0.5 ? (
      <FontAwesome key={star} name="star-half-full" size={25} color={COLORS.yellow} />
    ) : (
      <FontAwesome key={star} name="star-o" size={25} color={COLORS.yellow} />
    )
  )

  return <View style={styles.starsContainer}>{stars.map((star) => star)}</View>
}

export default RecipeRating
