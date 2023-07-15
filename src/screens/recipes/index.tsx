import { View } from 'react-native'
import { RecipeList } from 'src/components'
import RECIPES from 'src/constants/data/recipes.json'
import { RecipesNavigationProp } from 'src/types'

import { styles } from './styles'

const Recipes = ({ navigation, route }: RecipesNavigationProp) => {
  const category = route.params.category
  const recipesByCategory = RECIPES.filter((recipe) => recipe.category === category)

  const handleNavigate = (recipeId: number, recipeName: string) => {
    navigation.navigate('RecipeDetail', { recipeId, recipeName })
  }

  return (
    <View style={styles.container}>
      <RecipeList recipes={recipesByCategory} category={category} handleNavigate={handleNavigate} />
    </View>
  )
}

export default Recipes
