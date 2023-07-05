import { SafeAreaView, View } from 'react-native'

import { Categories, HomeIntro } from './components'
import { styles } from './styles'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <HomeIntro />
        <Categories />
      </View>
    </SafeAreaView>
  )
}
