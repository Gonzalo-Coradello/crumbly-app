import { View, FlatList, useWindowDimensions } from 'react-native'
import CATEGORIES from 'src/constants/data/categories.json'

import { styles } from './styles'
import CategoryItem from '../category-item'
import Typography from '../typography'

type Props = {
  handleNavigate: (categoryId: string, category: string) => void
}

const CategoryList = ({ handleNavigate }: Props) => {
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
          data={CATEGORIES}
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
