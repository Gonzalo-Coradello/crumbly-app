import { NavigationContainer } from '@react-navigation/native'

import TabNavigator from './tabs'

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}
