import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { RecipeList } from 'src/components'
import { RecipesNavigationProp, Recipe } from 'src/types'

import { styles } from './styles'

const Recipes = ({ navigation, route }: RecipesNavigationProp) => {
  const { categoryId, category } = route.params
  const recipes: Recipe[] = useSelector(({ recipes }) => recipes.data)
  const recipesByCategory = recipes.filter((recipe) => recipe.categoryId === categoryId)

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
