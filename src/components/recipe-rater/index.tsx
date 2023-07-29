import { FontAwesome } from '@expo/vector-icons'
import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'

const RecipeRater = () => {
  const [selected, setSelected] = useState(0)

  const stars = [1, 2, 3, 4, 5]
  return (
    <View style={styles.starsContainer}>
      {stars.map((num) => (
        <TouchableOpacity key={num} onPress={() => setSelected(num)}>
          <FontAwesome name={selected >= num ? 'star' : 'star-o'} size={35} color={COLORS.yellow} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default RecipeRater
