import { View, Image } from 'react-native'
import { Typography } from 'src/components'
import RECIPES from 'src/constants/data/recipes.json'
import { DetailNavigationProps } from 'src/types'

import { styles } from './style'

const RecipeDetail = ({ navigation, route }: DetailNavigationProps) => {
  const recipeId = route.params.recipeId
  const recipe = RECIPES.find((recipe) => recipe.id === recipeId)
  return (
    <View style={styles.container}>
      <Typography size={25} variant="bold" centered>
        {recipe?.name}
      </Typography>
      <Image source={{ uri: recipe?.image }} style={styles.image} />
    </View>
  )
}

export default RecipeDetail
