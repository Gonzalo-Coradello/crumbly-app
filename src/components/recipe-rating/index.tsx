import { FontAwesome } from '@expo/vector-icons'
import { View } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'

type Props = {
  rating: number
}

const RecipeRating = ({ rating }: Props) => {
  const stars = [1, 2, 3, 4, 5].map((star) =>
    rating >= star ? (
      <FontAwesome key={star} name="star" size={30} color={COLORS.yellow} />
    ) : star - Math.floor(rating) === 1 && rating - Math.floor(rating) >= 0.5 ? (
      <FontAwesome key={star} name="star-half-full" size={30} color={COLORS.yellow} />
    ) : (
      <FontAwesome key={star} name="star-o" size={30} color={COLORS.yellow} />
    )
  )

  return <View style={styles.starsContainer}>{stars.map((star) => star)}</View>
}

export default RecipeRating
