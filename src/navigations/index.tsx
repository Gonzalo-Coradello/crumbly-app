import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import AuthStack from './auth'
import TabNavigator from './tabs'

export default function RootNavigator() {
  const user = useSelector(({ auth }) => auth.value.user)
  return <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}</NavigationContainer>
}
