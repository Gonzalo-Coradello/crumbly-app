import { useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { RecipeDetail, SaveRecipeModal } from 'src/components'
import { DetailNavigationProps } from 'src/types'

import { styles } from './style'

const RecipeDetailContainer = ({ navigation, route }: DetailNavigationProps) => {
  const recipeId = route.params.recipeId
  const user = useSelector(({ users }) => users.current)
  const [modalVisible, setModalVisible] = useState(false)
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
          recipeId={recipeId}
          user={user}
          openModal={() => setModalVisible(true)}
          navigation={navigation}
        />
      </View>
    </>
  )
}

export default RecipeDetailContainer
