import { SafeAreaView, View } from 'react-native'

import { Home } from './screens'
import { styles } from './styles'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Home />
      </View>
    </SafeAreaView>
  )
}
