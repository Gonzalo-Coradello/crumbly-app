import { View, Text, FlatList } from 'react-native'
import CATEGORIES from 'src/constants/data/categories.json'

import CategoryItem from '../category-item'

const Categories = () => {
  return (
    <View>
      <Text>Categorías</Text>
      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={CATEGORIES}
        renderItem={({ item }) => <CategoryItem {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Categories
