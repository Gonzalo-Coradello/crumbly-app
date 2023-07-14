import { View, FlatList, useWindowDimensions } from 'react-native'
import CATEGORIES from 'src/constants/data/categories.json'

import { styles } from './styles'
import CategoryItem from '../category-item'
import Typography from '../typography'

type Props = {
  handleNavigate: (category: string) => void
}

const CategoryList = ({ handleNavigate }: Props) => {
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
        renderItem={({ item }) => <CategoryItem {...item} handleNavigate={handleNavigate} />}
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
