import { TextInput, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from 'src/components'
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
    await updateUser({ localId, lists: [...user.lists, { name: name.value, recipes }] })
    dispatch(createList({ listName: name.value, recipeId }))
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Ponle un nombre" style={styles.input} {...name} />
      <TouchableOpacity style={styles.button} onPress={create}>
        <Typography size={18} variant="semibold">
          Crear lista
        </Typography>
      </TouchableOpacity>
    </View>
  )
}

export default CreateList
