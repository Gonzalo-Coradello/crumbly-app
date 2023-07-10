import { Ionicons } from '@expo/vector-icons'
import { View, TouchableOpacity, FlatList, Text } from 'react-native'
import { Recipe } from 'src/components'
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
        {/* <Text style={styles.goBackText}>Go back</Text> */}
      </TouchableOpacity>
      {/* <Input
        borderColor={COLORS.black}
        handleFocus={() => {}}
        handleBlur={() => {}}
        handleChangeText={() => {}}
        handleCreate={() => {}}
      /> */}
      {/* <Text style={styles.title}>{category}</Text> */}
      {recipes.length === 0 ? (
        <Text style={styles.empty}>No hay recetas disponibles</Text>
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
