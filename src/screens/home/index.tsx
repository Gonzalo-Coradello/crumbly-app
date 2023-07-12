import { ScrollView, useWindowDimensions } from 'react-native'
import { CategoryList, HomeIntro } from 'src/components'

import { styles } from './styles'

type Props = {
  handleCategory: (category: string) => void
}

const Home = ({ handleCategory }: Props) => {
  const { width } = useWindowDimensions()

  const isTablet = width > 650
  return (
    <ScrollView
      style={isTablet ? styles.tabletContainer : styles.container}
      showsVerticalScrollIndicator={false}
      overScrollMode="never">
      <HomeIntro />
      <CategoryList handleCategory={handleCategory} />
    </ScrollView>
  )
}

export default Home
