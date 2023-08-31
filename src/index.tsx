import { useFonts } from 'expo-font'
import { Platform, StatusBar } from 'react-native'
import { Provider } from 'react-redux'

import { Loader } from './components'
import { init } from './db'
import RootNavigator from './navigations'
import store from './store'

init()
  .then(() => console.log('DB initialized'))
  .catch((err) => {
    console.log('DB initialization failed:')
    console.log(err.message)
  })

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

  if (!loaded) return <Loader />

  return (
    <Provider store={store}>
      <StatusBar barStyle={Platform.OS === 'android' ? 'default' : 'dark-content'} />
      <RootNavigator />
    </Provider>
  )
}
