import { RecipeForm } from 'src/components'
import { CreateRecipeNavigationProps } from 'src/types'

const CreateRecipe = ({ navigation }: CreateRecipeNavigationProps) => {
  return <RecipeForm navigation={navigation} />
}

export default CreateRecipe
