import { TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'src/components'
import { useInput } from 'src/hooks'
import { useUpdateUserMutation } from 'src/store/users/api'
import { createList } from 'src/store/users/users.slice'
import { CreateListNavigationProps, User } from 'src/types'

import { styles } from './styles'

const CreateList = ({ navigation, route }: CreateListNavigationProps) => {
  const name = useInput()
  const dispatch = useDispatch()
  const [updateUser] = useUpdateUserMutation()
  const { localId } = useSelector(({ auth }) => auth.value)
  const user: User = useSelector(({ users }) => users.current)
  const recipeId = route.params?.recipeId

  const create = async () => {
    const recipes = recipeId ? [recipeId] : []
    const lists = user.lists ? user.lists : []
    await updateUser({ localId, lists: [...lists, { name: name.value, recipes }] })
    dispatch(createList({ listName: name.value, recipeId }))
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Ponle un nombre" style={styles.input} {...name} />
      <Button variant="primary" fontSize={16} fontWeight="medium" onPress={create}>
        Crear lista
      </Button>
    </View>
  )
}

export default CreateList
