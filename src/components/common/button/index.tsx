import { TouchableOpacity } from 'react-native'

import { styles } from './styles'
import Typography from '../typography'

type Props = {
  variant?: 'primary' | 'white' | 'delete' | 'disabled' | 'small'
  fontWeight?: 'bold' | 'semibold' | 'medium' | 'regular' | 'light' | 'extralight'
  fontSize?: number
  marginTop?: number
  marginBottom?: number
  onPress: () => void
  children: React.ReactNode
  fullWidth?: boolean
}

const Button = ({
  variant = 'white',
  fontWeight = 'regular',
  fontSize = 14,
  marginTop = 10,
  marginBottom,
  onPress,
  children,
  fullWidth = false,
}: Props) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary'
          ? styles.primary
          : variant === 'disabled'
          ? styles.disabled
          : variant === 'delete'
          ? styles.delete
          : variant === 'small'
          ? styles.small
          : null,
        { marginTop, marginBottom },
        fullWidth && { width: '80%' },
      ]}
      onPress={onPress}>
      <Typography
        variant={fontWeight}
        centered
        color={
          variant === 'primary' || variant === 'disabled'
            ? 'white'
            : variant === 'delete'
            ? 'error'
            : 'black'
        }
        size={fontSize}>
        {children}
      </Typography>
    </TouchableOpacity>
  )
}

export default Button
