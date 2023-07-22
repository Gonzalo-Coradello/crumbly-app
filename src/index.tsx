import { useFonts } from 'expo-font'
import { ActivityIndicator, Platform, StatusBar, View } from 'react-native'
import { Provider } from 'react-redux'

import RootNavigator from './navigations'
import store from './store'
import { styles } from './styles'

export default function App() {
  const [loaded, error] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
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
    <Provider store={store}>
      <StatusBar barStyle={Platform.OS === 'android' ? 'default' : 'dark-content'} />
      <RootNavigator />
    </Provider>
  )
}
