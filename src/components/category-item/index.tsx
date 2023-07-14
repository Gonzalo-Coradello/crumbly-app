import { ImageBackground, TouchableOpacity } from 'react-native'
// import { Typography } from 'src/components'
import { Category } from 'src/types'

import { styles } from './styles'
import Typography from '../typography'

interface Props extends Category {
  handleNavigate: (category: string) => void
}

const CategoryItem = ({ name, backgroundImage, handleNavigate }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNavigate(name)}>
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
