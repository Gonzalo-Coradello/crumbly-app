import { View, Text, Image } from 'react-native'
import { Recipe as RecipeType } from 'src/types'

import { styles } from './styles'

const Recipe = ({ name, image, author }: RecipeType) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.row}>
          <Text>{author}</Text>
          <Text>Guardar</Text>
        </View>
      </View>
    </View>
  )
}

export default Recipe
