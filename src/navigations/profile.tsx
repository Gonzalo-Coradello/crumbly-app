import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Header } from 'src/components'
import { Profile } from 'src/screens'

const Stack = createNativeStackNavigator()

export default function ProfileNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header title="Perfil" />,
          headerTitleAlign: 'center',
        })}
      />
    </Stack.Navigator>
  )
}
