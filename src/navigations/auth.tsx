import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from 'src/components'
import { Auth } from 'src/screens'

const Stack = createNativeStackNavigator()

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        header: () => <Header title="Bienvenido" />,
      }}>
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  )
}
