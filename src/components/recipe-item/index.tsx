import { View, Image } from 'react-native'
import { Typography } from 'src/components'
import { Recipe as RecipeType } from 'src/types'

import { styles } from './styles'

const RecipeItem = ({ name, image, author }: RecipeType) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.body}>
        <Typography variant="bold">{name}</Typography>
        <View style={styles.row}>
          <Typography>{author}</Typography>
          <Typography>Guardar</Typography>
        </View>
      </View>
    </View>
  )
}

export default RecipeItem
