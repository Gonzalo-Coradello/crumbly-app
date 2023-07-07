import { View, ScrollView } from 'react-native'
import { Categories, HomeIntro } from 'src/components'

import { styles } from './styles'

type Props = {
  handleCategory: (category: string) => void
}

const Home = ({ handleCategory }: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <HomeIntro />
        <Categories handleCategory={handleCategory} />
      </ScrollView>
    </View>
  )
}

export default Home
