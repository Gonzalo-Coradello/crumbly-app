import { TextInput, View } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'

type Props = {
  borderColor?: string
  placeholder: string
  multiline?: boolean
  // handleChangeText: () => void
}

const Input = ({
  borderColor = COLORS.darkGray,
  placeholder,
  multiline,
  // handleFocus,
  // handleBlur,
  // handleChangeText,
  // handleCreate,
  ...props
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[styles.input, { borderColor }]}
        autoCapitalize="none"
        autoCorrect={false}
        // onChangeText={handleChangeText}
        cursorColor={borderColor}
        placeholderTextColor={borderColor}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={multiline ? 3 : 1}
      />
    </View>
  )
}

export default Input
