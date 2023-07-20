import { BlurView } from 'expo-blur'
import { ImageBackground, TouchableOpacity } from 'react-native'
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
        <BlurView style={styles.nameContainer} intensity={5}>
          <Typography variant="bold" size={16} centered style={styles.categoryName}>
            {name}
          </Typography>
        </BlurView>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CategoryItem
