import { TextInput, View } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'
import Typography from '../../common/typography'

type Props = {
  label: string
  value: string
  onChangeText: (text: string) => void
  isSecure?: boolean
  error?: string
  hasError: boolean
  touched: boolean
  placeholder?: string
}

const FormInput = ({
  label,
  onChangeText,
  value,
  error,
  hasError,
  touched,
  placeholder,
  isSecure = false,
}: Props) => {
  return (
    <View style={styles.container}>
      <Typography size={16} variant="medium">
        {label}
      </Typography>
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        autoCapitalize="none"
        autoCorrect={false}
        placeholderTextColor={COLORS.gray}
      />
      {hasError && touched && (
        <Typography style={styles.error} color="error">
          {error}
        </Typography>
      )}
    </View>
  )
}

export default FormInput
