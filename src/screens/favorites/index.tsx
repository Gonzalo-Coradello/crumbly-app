import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { FavoriteList } from 'src/components'
import { FavoritesNavigationProp, Recipe } from 'src/types'

import { styles } from './styles'

const Favorites = ({ navigation }: FavoritesNavigationProp) => {
  const recipes: Recipe[] = useSelector(({ recipes }) =>
    recipes.data.filter((r: Recipe) => r.id === 1 || r.id === 7)
  )

  const handleNavigate = (recipeId: number) => {
    navigation.navigate('RecipeDetail', { recipeId })
  }

  return (
    <View style={styles.container}>
      <FavoriteList recipes={recipes} handleNavigate={handleNavigate} />
    </View>
  )
}

export default Favorites
