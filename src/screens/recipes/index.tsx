import { useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Loader, RecipeList, SaveRecipeModal, Typography } from 'src/components'
import { useGetRecipesQuery } from 'src/store/recipes/api'
import { RecipesNavigationProp, User } from 'src/types'

import { styles } from './styles'

const Recipes = ({ navigation, route }: RecipesNavigationProp) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState('')
  const { categoryId, list } = route.params
  const { data: recipes, isLoading, isError, error } = useGetRecipesQuery(null)
  const user: User = useSelector(({ users }) => users.current)
  const userRecipeList = user.lists.find((l) => l.name === list)?.recipes || []

  if (isLoading) return <Loader />
  if (isError) {
    return (
      <View>
        <Typography>{error.toString()}</Typography>
      </View>
    )
  }
  if (!recipes) return null

  const recipeList = categoryId
    ? recipes.filter((recipe) => recipe.categoryId === categoryId)
    : list === 'favorites'
    ? recipes.filter((recipe) => user.favorites?.includes(recipe.id))
    : list === 'author'
    ? recipes.filter((recipe) => user.recipes?.includes(recipe.id))
    : recipes.filter((recipe) => userRecipeList?.includes(recipe.id))

  const emptyMessage = categoryId
    ? 'No hay recetas disponibles en esta categoría'
    : list === 'favorites'
    ? 'Aún no has guardado recetas en tus favoritos'
    : list === 'author'
    ? 'Aún no has creado ninguna receta'
    : 'Aún no has guardado recetas en esta lista'

  const handleNavigate = (recipeId: string) => {
    navigation.navigate('RecipeDetail', { recipeId })
  }

  const openModal = (id: string) => {
    setModalVisible(true)
    setSelectedRecipe(id)
  }

  return (
    <>
      <SaveRecipeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedRecipe={selectedRecipe}
        user={user}
        navigation={navigation}
      />
      <View style={styles.container}>
        <RecipeList
          recipes={recipeList}
          handleNavigate={handleNavigate}
          emptyMessage={emptyMessage}
          openModal={openModal}
        />
      </View>
    </>
  )
}

export default Recipes
