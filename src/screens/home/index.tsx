import { ScrollView, useWindowDimensions } from 'react-native'
import { CategoryList, HomeIntro } from 'src/components'
import { HomeNavigationProp } from 'src/types'

import { styles } from './styles'

const Home = ({ navigation, route }: HomeNavigationProp) => {
  const { width } = useWindowDimensions()

  const handleNavigate = (categoryId: string, category: string) => {
    navigation.navigate('Recipes', { categoryId, category })
  }

  const isTablet = width > 650
  return (
    <ScrollView
      style={isTablet ? styles.tabletContainer : styles.container}
      showsVerticalScrollIndicator={false}
      overScrollMode="never">
      <HomeIntro />
      <CategoryList handleNavigate={handleNavigate} />
    </ScrollView>
  )
}

export default Home
