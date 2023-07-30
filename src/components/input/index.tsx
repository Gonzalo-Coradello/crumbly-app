import { TextInput, View } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'

type Props = {
  borderColor?: string
  placeholder: string
  multiline?: boolean
  onChangeText: (text: string) => void
  value: string
  borderless?: boolean
}

const Input = ({
  borderColor = COLORS.darkGray,
  placeholder,
  multiline,
  onChangeText,
  value,
  borderless,
  ...props
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={[
          styles.input,
          {
            minHeight: multiline ? 60 : 45,
            verticalAlign: multiline ? 'top' : 'middle',
            paddingTop: multiline ? 12 : 10,
            borderWidth: borderless ? 0 : 1,
            borderColor,
          },
        ]}
        onChangeText={onChangeText}
        value={value}
        cursorColor={borderColor}
        placeholderTextColor={COLORS.darkGray}
        selectionColor={COLORS.primary}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={multiline ? 3 : 1}
      />
    </View>
  )
}

export default Input
