import { BlurView } from 'expo-blur'
import { ImageBackground, TouchableOpacity } from 'react-native'
import { Category } from 'src/types'

import { styles } from './styles'
import Typography from '../../common/typography'

interface Props extends Category {
  handleNavigate: (categoryId: string, category: string) => void
}

const CategoryItem = ({ id, name, backgroundImage, handleNavigate }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handleNavigate(id, name)}>
      <ImageBackground
        source={{ uri: backgroundImage }}
        resizeMode="cover"
        style={styles.backgroundImage}>
        <BlurView style={styles.nameContainer} intensity={5} tint="dark">
          <Typography variant="semibold" size={16} centered style={styles.categoryName}>
            {name}
          </Typography>
        </BlurView>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default CategoryItem
