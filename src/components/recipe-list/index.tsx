import { View, FlatList, useWindowDimensions } from 'react-native'
import { Recipe as RecipeType } from 'src/types'

import { styles } from './styles'
import RecipeItem from '../recipe-item'
import Typography from '../typography'

type Props = {
  recipes: RecipeType[]
  handleNavigate: (recipeId: string, recipeName: string) => void
  emptyMessage: string
  openModal: (id: string) => void
}

const RecipeList = ({ recipes, handleNavigate, emptyMessage, openModal }: Props) => {
  const { width } = useWindowDimensions()

  const isTablet = width > 650
  return (
    <View style={isTablet ? styles.tabletContainer : styles.container}>
      {recipes.length === 0 ? (
        <Typography size={20} centered style={styles.empty}>
          {emptyMessage}
        </Typography>
      ) : (
        <FlatList
          data={recipes}
          renderItem={({ item }) => (
            <RecipeItem {...item} handleNavigate={handleNavigate} openModal={openModal} />
          )}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.recipeList}
          showsVerticalScrollIndicator={false}
          overScrollMode="never"
        />
      )}
    </View>
  )
}

export default RecipeList
