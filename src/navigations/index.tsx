import { NavigationContainer } from '@react-navigation/native'

import RecipesNavigator from './recipes'

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RecipesNavigator />
    </NavigationContainer>
  )
}
