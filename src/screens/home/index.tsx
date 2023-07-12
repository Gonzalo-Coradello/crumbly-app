import { ScrollView } from 'react-native'
import { CategoryList, HomeIntro } from 'src/components'

import { styles } from './styles'

type Props = {
  handleCategory: (category: string) => void
}

const Home = ({ handleCategory }: Props) => {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
      overScrollMode="never">
      <HomeIntro />
      <CategoryList handleCategory={handleCategory} />
    </ScrollView>
  )
}

export default Home
