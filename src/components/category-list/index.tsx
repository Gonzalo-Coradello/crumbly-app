import { View, FlatList, useWindowDimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { Category } from 'src/types'

import { styles } from './styles'
import CategoryItem from '../category-item'
import Typography from '../typography'

type Props = {
  handleNavigate: (categoryId: string, category: string) => void
}

const CategoryList = ({ handleNavigate }: Props) => {
  const categories: Category[] = useSelector(({ categories }) => categories.data)
  const { width } = useWindowDimensions()

  const isTablet = width > 650
  return (
    <View style={styles.container}>
      <Typography variant="regular" size={isTablet ? 25 : 24}>
        Categorías
      </Typography>
      <View style={styles.categoryListContainer}>
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={categories}
          renderItem={({ item }) => <CategoryItem {...item} handleNavigate={handleNavigate} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.categoryList}
          columnWrapperStyle={styles.columnWrapper}
          numColumns={2}
          scrollEnabled={false}
        />
      </View>
    </View>
  )
}

export default CategoryList
