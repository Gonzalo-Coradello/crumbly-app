import { Text, ImageBackground } from 'react-native'
import { Category } from 'src/types'

import { styles } from './styles'
const CategoryItem = ({ name, backgroundImage }: Category) => {
  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      resizeMode="cover"
      style={styles.backgroundImage}
    >
      <Text style={styles.categoryName}>{name}</Text>
    </ImageBackground>
  )
}

export default CategoryItem
