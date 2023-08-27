import { FontAwesome } from '@expo/vector-icons'
import { View } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'

type Props = {
  ratings: number[]
}

const RecipeRating = ({ ratings }: Props) => {
  if (!ratings)
    return (
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesome key={star} name="star-o" size={25} color={COLORS.yellow} />
        ))}
      </View>
    )

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
