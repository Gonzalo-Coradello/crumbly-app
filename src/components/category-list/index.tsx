import { View, FlatList, useWindowDimensions } from 'react-native'
import { Typography, CategoryItem } from 'src/components'
import CATEGORIES from 'src/constants/data/categories.json'

import { styles } from './styles'

type Props = {
  handleCategory: (category: string) => void
}

const CategoryList = ({ handleCategory }: Props) => {
  const { width } = useWindowDimensions()

  const isTablet = width > 650
  return (
    <View style={styles.categoryListContainer}>
      <Typography variant="bold" size={isTablet ? 25 : 20}>
        Categorías
      </Typography>
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

export default CategoryList
