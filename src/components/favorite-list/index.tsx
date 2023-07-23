import { View, FlatList, useWindowDimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { Recipe, User } from 'src/types'

import { styles } from './styles'
import RecipeItem from '../recipe-item'
import Typography from '../typography'

type Props = {
  handleNavigate: (recipeId: string, recipeName: string) => void
}

const FavoriteList = ({ handleNavigate }: Props) => {
  const { width } = useWindowDimensions()
  const user: User = useSelector(({ users }) => users.current)
  const recipes: Recipe[] = useSelector(({ recipes }) => recipes.data)
  const favorites = recipes.filter((recipe) => user.favorites.includes(recipe.id))

  const isTablet = width > 650
  return (
    <View style={isTablet ? styles.tabletContainer : styles.container}>
      {favorites.length === 0 ? (
        <Typography size={20} centered style={styles.empty}>
          Aún no has guardado ninguna receta en esta lista.
        </Typography>
      ) : (
        <FlatList
          data={favorites}
          renderItem={({ item }) => <RecipeItem {...item} handleNavigate={handleNavigate} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.recipeList}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        />
      )}
    </View>
  )
}

export default FavoriteList
