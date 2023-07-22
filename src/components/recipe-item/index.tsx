import { Ionicons } from '@expo/vector-icons'
import { View, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import { Recipe } from 'src/types'

import { styles } from './styles'
import Typography from '../typography'

interface Props extends Recipe {
  handleNavigate: (recipeId: number, recipeName: string) => void
}

const RecipeItem = ({ id, name, image, author, handleNavigate }: Props) => {
  const { width } = useWindowDimensions()

  const isTablet = width > 650
  return (
    <View style={isTablet ? styles.tabletContainer : styles.container}>
      <TouchableOpacity onPress={() => handleNavigate(id, name)}>
        <Image source={{ uri: image }} style={isTablet ? styles.tabletImage : styles.image} />
        <View style={styles.body}>
          <Typography variant="bold" size={isTablet ? 25 : 14}>
            {name}
          </Typography>
          <View style={styles.row}>
            <Typography size={isTablet ? 20 : 14}>{author}</Typography>
            <View style={styles.iconsContainer}>
              <Ionicons name="arrow-redo-outline" size={25} />
              <Ionicons name="bookmark-outline" size={25} />
              {/* <Ionicons name="add-circle-outline" size={25} /> */}
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RecipeItem
