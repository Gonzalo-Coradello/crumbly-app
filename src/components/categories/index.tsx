import { View, Text, FlatList } from 'react-native'
import CATEGORIES from 'src/constants/data/categories.json'

import { styles } from './styles'
import CategoryItem from '../category-item'

const Categories = () => {
  return (
    <View style={styles.categoryListContainer}>
      <Text style={styles.title}>Categorías</Text>
      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={CATEGORIES}
        renderItem={({ item }) => <CategoryItem {...item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
      />
    </View>
  )
}

export default Categories
