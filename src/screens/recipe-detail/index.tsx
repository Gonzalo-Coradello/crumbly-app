import { View } from 'react-native'
import { RecipeDetail } from 'src/components'
import { DetailNavigationProps } from 'src/types'

import { styles } from './style'

const RecipeDetailContainer = ({ navigation, route }: DetailNavigationProps) => {
  const recipeId = route.params.recipeId
  return (
    <View style={styles.container}>
      <RecipeDetail recipeId={recipeId} />
    </View>
  )
}

export default RecipeDetailContainer
