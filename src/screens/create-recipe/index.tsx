import { RecipeForm } from 'src/components'
import { CreateRecipeNavigationProps } from 'src/types'

const CreateRecipe = ({ navigation, route }: CreateRecipeNavigationProps) => {
  const recipe = route.params.recipe
  return <RecipeForm navigation={navigation} recipe={recipe} />
}

export default CreateRecipe
