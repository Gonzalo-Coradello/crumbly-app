import { TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Typography } from 'src/components'

import { styles } from './styles'

const CreateList = () => {
  return (
    <View style={styles.container}>
      {/* <Input borderColor="black" /> */}
      <TextInput placeholder="Ponle un nombre" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Typography size={18} variant="semibold">
          Crear lista
        </Typography>
      </TouchableOpacity>
    </View>
  )
}

export default CreateList
