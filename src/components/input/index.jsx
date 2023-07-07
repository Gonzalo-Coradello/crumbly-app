import { TextInput, View } from 'react-native'

import { styles } from './styles'

const Input = ({
  borderColor,
  handleFocus,
  handleBlur,
  handleChangeText,
  handleCreate,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, { borderColor }]}
        autoCapitalize="none"
        autoCorrect={false}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={handleChangeText}
        cursorColor={borderColor}
        placeholderTextColor={borderColor}
      />
    </View>
  )
}

export default Input
