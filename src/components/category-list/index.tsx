import { View, FlatList, useWindowDimensions } from 'react-native'
import { useGetCategoriesQuery } from 'src/store/categories/api'
import { Category } from 'src/types'

import { styles } from './styles'
import CategoryItem from '../category-item'
import Loader from '../loader'
import Typography from '../typography'

type Props = {
  handleNavigate: (categoryId: string, category: string) => void
}

const CategoryList = ({ handleNavigate }: Props) => {
  const { width } = useWindowDimensions()
  const isTablet = width > 650

  const { data, isLoading, isError, error } = useGetCategoriesQuery(null)

  if (isLoading) return <Loader />
  if (isError) {
    return (
      <View>
        <Typography>{error.toString()}</Typography>
      </View>
    )
  }
  if (!data) return null

  const categories: Category[] = data

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
