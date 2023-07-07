import { View, ScrollView } from 'react-native'
import { Categories, HomeIntro } from 'src/components'

import { styles } from './styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode="never">
        <HomeIntro />
        <Categories />
      </ScrollView>
    </View>
  )
}

export default Home
