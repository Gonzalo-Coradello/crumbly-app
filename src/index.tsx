import { useFonts } from 'expo-font'
import { ActivityIndicator, SafeAreaView, View } from 'react-native'

import RootNavigator from './navigations'
import { styles } from './styles'

export default function App() {
  const [loaded, error] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  })

  if (error) {
    console.warn(error)
    return
  }

  if (!loaded)
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" />
      </View>
    )

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
  )
}
