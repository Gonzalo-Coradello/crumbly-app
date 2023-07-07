import { View, Text } from 'react-native'
import { Recipe as RecipeType } from 'src/types'

const Recipe = ({ name }: RecipeType) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default Recipe
