import { SafeAreaView, ScrollView } from 'react-native'

import { Categories, HomeIntro } from './components'
import { styles } from './styles'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        overScrollMode="never">
        <HomeIntro />
        <Categories />
      </ScrollView>
    </SafeAreaView>
  )
}
