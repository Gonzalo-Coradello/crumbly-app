import { TextInput, View, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { Typography } from 'src/components'
import { useInput } from 'src/hooks'
import { createList } from 'src/store/users/users.slice'
import { CreateListNavigationProps } from 'src/types'

import { styles } from './styles'

const CreateList = ({ navigation, route }: CreateListNavigationProps) => {
  const name = useInput()
  const dispatch = useDispatch()
  const recipeId = route.params?.recipeId

  const create = () => {
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
