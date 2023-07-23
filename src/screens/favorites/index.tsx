import { View } from 'react-native'
import { FavoriteList } from 'src/components'
import { FavoritesNavigationProp } from 'src/types'

import { styles } from './styles'

const Favorites = ({ navigation }: FavoritesNavigationProp) => {
  const handleNavigate = (recipeId: string) => {
    navigation.navigate('RecipeDetail', { recipeId })
  }

  return (
    <View style={styles.container}>
      <FavoriteList handleNavigate={handleNavigate} />
    </View>
  )
}

export default Favorites
