import { Ionicons } from '@expo/vector-icons'
import { View, TouchableOpacity, FlatList } from 'react-native'
import { Recipe, Typography } from 'src/components'
import { COLORS } from 'src/themes'
import { Recipe as RecipeType } from 'src/types'

import { styles } from './styles'

type Props = {
  recipes: RecipeType[]
  category: string
  handleGoBack: () => void
}

const RecipeList = ({ recipes, category, handleGoBack }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={35} color={COLORS.black} />
      </TouchableOpacity>
      {/* <Input
        borderColor={COLORS.black}
        handleFocus={() => {}}
        handleBlur={() => {}}
        handleChangeText={() => {}}
        handleCreate={() => {}}
      /> */}
      {recipes.length === 0 ? (
        <Typography size={20} centered style={styles.empty}>
          No hay recetas disponibles
        </Typography>
      ) : (
        <FlatList
          data={recipes}
          renderItem={({ item }) => <Recipe {...item} />}
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
