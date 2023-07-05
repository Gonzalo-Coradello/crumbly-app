import { View, Text } from 'react-native'
import { Category } from 'src/types'

const CategoryItem = ({ name }: Category) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default CategoryItem
