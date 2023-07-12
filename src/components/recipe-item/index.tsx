import { View, Image, useWindowDimensions } from 'react-native'
import { Typography } from 'src/components'
import { Recipe as RecipeType } from 'src/types'

import { styles } from './styles'

const RecipeItem = ({ name, image, author }: RecipeType) => {
  const { width } = useWindowDimensions()

  const isTablet = width > 650
  return (
    <View style={isTablet ? styles.tabletContainer : styles.container}>
      <Image source={{ uri: image }} style={isTablet ? styles.tabletImage : styles.image} />
      <View style={styles.body}>
        <Typography variant="bold" size={isTablet ? 25 : 14}>
          {name}
        </Typography>
        <View style={styles.row}>
          <Typography size={isTablet ? 20 : 14}>{author}</Typography>
          <Typography size={isTablet ? 20 : 14}>Guardar</Typography>
        </View>
      </View>
    </View>
  )
}

export default RecipeItem
