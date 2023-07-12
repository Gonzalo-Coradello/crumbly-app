import { ImageBackground, TouchableOpacity } from 'react-native'
import { Typography } from 'src/components'
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
        <Typography variant="bold" centered style={styles.categoryName}>
          {name}
        </Typography>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CategoryItem
