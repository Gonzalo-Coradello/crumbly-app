import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { RecipeList } from 'src/components'
import { RecipesNavigationProp, Recipe, User } from 'src/types'

import { styles } from './styles'

const Recipes = ({ navigation, route }: RecipesNavigationProp) => {
  const { categoryId, list } = route.params
  const recipes: Recipe[] = useSelector(({ recipes }) => recipes.data)
  const user: User = useSelector(({ users }) => users.current)
  const userRecipeList = user.lists.find((l) => l.name === list)?.recipes || []

  const recipeList = categoryId
    ? recipes.filter((recipe) => recipe.categoryId === categoryId)
    : list === 'favorites'
    ? recipes.filter((recipe) => user.favorites.includes(recipe.id))
    : recipes.filter((recipe) => userRecipeList.includes(recipe.id))

  const emptyMessage = categoryId
    ? 'No hay recetas disponibles en esta categoría'
    : list === 'favorites'
    ? 'Aún no has guardado recetas en tus favoritos'
    : 'Aún no has guardado recetas en esta lista'

  const handleNavigate = (recipeId: string) => {
    navigation.navigate('RecipeDetail', { recipeId })
  }

  return (
    <View style={styles.container}>
      <RecipeList
        recipes={recipeList}
        handleNavigate={handleNavigate}
        emptyMessage={emptyMessage}
      />
    </View>
  )
}

export default Recipes
