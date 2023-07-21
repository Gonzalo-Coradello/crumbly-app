import { View, Image } from 'react-native'
import { useSelector } from 'react-redux'
import { Typography } from 'src/components'
import { DetailNavigationProps, Recipe } from 'src/types'

import { styles } from './style'

const RecipeDetail = ({ navigation, route }: DetailNavigationProps) => {
  const recipeId = route.params.recipeId
  const recipes: Recipe[] = useSelector(({ recipes }) => recipes.data)
  const recipe = recipes.find((recipe) => recipe.id === recipeId)
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
