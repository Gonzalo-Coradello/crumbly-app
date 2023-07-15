import { ScrollView, useWindowDimensions } from 'react-native'
import { CategoryList, HomeIntro } from 'src/components'
import { HomeNavigationProp } from 'src/types'

import { styles } from './styles'

const Home = ({ navigation, route }: HomeNavigationProp) => {
  const { width } = useWindowDimensions()

  const handleNavigate = (category: string) => {
    navigation.navigate('Recipes', { category })
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
