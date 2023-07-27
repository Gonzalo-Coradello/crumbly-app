import { useState } from 'react'
import { TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch } from 'react-redux'
import { Typography } from 'src/components'
import { createList } from 'src/store/users/users.slice'
import { CreateListNavigationProps } from 'src/types'

import { styles } from './styles'

const CreateList = ({ navigation, route }: CreateListNavigationProps) => {
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const recipeId = route.params?.recipeId

  const create = () => {
    dispatch(createList({ listName: name, recipeId }))
    setName('')
    navigation.navigate('Profile')
  }

  return (
    <View style={styles.container}>
      {/* <Input borderColor="black" /> */}
      <TextInput
        placeholder="Ponle un nombre"
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TouchableOpacity style={styles.button} onPress={create}>
        <Typography size={18} variant="semibold">
          Crear lista
        </Typography>
      </TouchableOpacity>
    </View>
  )
}

export default CreateList
