import { FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'

type Props = {
  selected: number
  fn: (args?: any) => void
}

const RecipeRater = ({ selected, fn }: Props) => {
  const stars = [1, 2, 3, 4, 5]

  return (
    <View style={styles.starsContainer}>
      {stars.map((num) => (
        <TouchableOpacity key={num} onPress={() => fn(num)}>
          <FontAwesome name={selected >= num ? 'star' : 'star-o'} size={35} color={COLORS.yellow} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default RecipeRater
