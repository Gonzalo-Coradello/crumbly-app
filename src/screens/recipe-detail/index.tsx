import { useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Loader, RecipeDetail, SaveRecipeModal, Typography } from 'src/components'
import { useGetRecipeByIdQuery } from 'src/store/recipes/api'
import { DetailNavigationProps, Recipe } from 'src/types'

import { styles } from './style'

const RecipeDetailContainer = ({ navigation, route }: DetailNavigationProps) => {
  const recipeId = route.params.recipeId
  const user = useSelector(({ users }) => users.current)
  const [modalVisible, setModalVisible] = useState(false)

  const { data, isLoading, isError, error } = useGetRecipeByIdQuery(recipeId)

  if (isLoading) return <Loader />
  if (isError) {
    return (
      <View>
        <Typography>{error.toString()}</Typography>
      </View>
    )
  }
  if (!data) return null

  const recipe: Recipe = data[0]

  return (
    <>
      <SaveRecipeModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedRecipe={recipeId}
        user={user}
        navigation={navigation}
      />
      <View style={styles.container}>
        <RecipeDetail
          recipe={recipe}
          user={user}
          openModal={() => setModalVisible(true)}
          navigation={navigation}
        />
      </View>
    </>
  )
}

export default RecipeDetailContainer
