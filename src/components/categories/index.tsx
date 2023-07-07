import { View, Text, FlatList } from 'react-native'
import CATEGORIES from 'src/constants/data/categories.json'

import { styles } from './styles'
import CategoryItem from '../category-item'

type Props = {
  handleCategory: (category: string) => void
}

const Categories = ({ handleCategory }: Props) => {
  return (
    <View style={styles.categoryListContainer}>
      <Text style={styles.title}>Categorías</Text>
      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={CATEGORIES}
        renderItem={({ item }) => <CategoryItem {...item} handleCategory={handleCategory} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
        columnWrapperStyle={styles.columnWrapper}
        numColumns={2}
        scrollEnabled={false}
      />
    </View>
  )
}

export default Categories
