import { Ionicons } from '@expo/vector-icons'
import { View, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native'
import { COLORS } from 'src/themes'
import { Recipe as RecipeType } from 'src/types'

import { styles } from './styles'
import RecipeItem from '../recipe-item'
import Typography from '../typography'

type Props = {
  recipes: RecipeType[]
  handleNavigate: (recipeId: number, recipeName: string) => void
}

const RecipeList = ({ recipes, handleNavigate }: Props) => {
  const { width } = useWindowDimensions()

  const isTablet = width > 650
  return (
    <View style={isTablet ? styles.tabletContainer : styles.container}>
      <TouchableOpacity style={styles.goBack}>
        <Ionicons name="arrow-back" size={35} color={COLORS.black} />
      </TouchableOpacity>
      {recipes.length === 0 ? (
        <Typography size={20} centered style={styles.empty}>
          No hay recetas disponibles
        </Typography>
      ) : (
        <FlatList
          data={recipes}
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

export default RecipeList
