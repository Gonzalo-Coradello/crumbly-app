import { Ionicons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'

type Props = {
  category: string
  handleGoBack: () => void
}

const Recipes = ({ category, handleGoBack }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={30} color={COLORS.black} />
        <Text style={styles.goBackText}>Go back</Text>
      </TouchableOpacity>
      <Text>Recipes</Text>
      <Text>{category}</Text>
    </View>
  )
}

export default Recipes
