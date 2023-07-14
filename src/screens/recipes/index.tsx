import type { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { View } from 'react-native'
import { RecipeList } from 'src/components'
import RECIPES from 'src/constants/data/recipes.json'
import { RecipesParamList } from 'src/types'

import { styles } from './styles'

type RecipesNavigationProp = {
  navigation: NativeStackNavigationProp<RecipesParamList, 'Recipes'>
  route: RouteProp<RecipesParamList, 'Recipes'>
}

const Recipes = ({ navigation, route }: RecipesNavigationProp) => {
  const category = route.params.category
  const recipesByCategory = RECIPES.filter((recipe) => recipe.category === category)

  return (
    <View style={styles.container}>
      <RecipeList recipes={recipesByCategory} category={category} />
    </View>
  )
}

export default Recipes
