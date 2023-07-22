import { FontAwesome } from '@expo/vector-icons'
import { View } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'

const RecipeRater = () => {
  return (
    <View style={styles.starsContainer}>
      <FontAwesome name="star-o" size={30} color={COLORS.yellow} />
      <FontAwesome name="star-o" size={30} color={COLORS.yellow} />
      <FontAwesome name="star-o" size={30} color={COLORS.yellow} />
      <FontAwesome name="star-o" size={30} color={COLORS.yellow} />
      <FontAwesome name="star-o" size={30} color={COLORS.yellow} />
    </View>
  )
}

export default RecipeRater
