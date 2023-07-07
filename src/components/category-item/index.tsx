import { Text, ImageBackground, TouchableOpacity } from 'react-native'
import { Category } from 'src/types'

import { styles } from './styles'

interface Props extends Category {
  handleCategory: (category: string) => void
}

const CategoryItem = ({ name, backgroundImage, handleCategory }: Props) => {
  return (
    <TouchableOpacity onPress={() => handleCategory(name)}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <Text style={styles.categoryName}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CategoryItem
