import { View } from 'react-native'
import { RecipeList } from 'src/components'
import RECIPES from 'src/constants/data/recipes.json'
import { RecipesNavigationProp } from 'src/types'

import { styles } from './styles'

const Recipes = ({ navigation, route }: RecipesNavigationProp) => {
  const { categoryId, category } = route.params
  const recipesByCategory = RECIPES.filter((recipe) => recipe.categoryId === categoryId)

  const handleNavigate = (recipeId: number, recipeName: string) => {
    navigation.navigate('RecipeDetail', { recipeId, category })
  }

  return (
    <View style={styles.container}>
      <RecipeList recipes={recipesByCategory} handleNavigate={handleNavigate} />
    </View>
  )
}

export default Recipes
