import { Text } from 'react-native'
import { FONTS } from 'src/themes/fonts'

type Props = {
  variant?: 'bold' | 'medium' | 'regular' | 'light'
  size?: number
  centered?: boolean
  style?: object
  children: React.ReactNode
}

const Typography = ({ variant = 'regular', size, centered, style, children }: Props) => {
  return (
    <Text
      style={[
        {
          fontFamily:
            variant === 'regular'
              ? FONTS.regular
              : variant === 'bold'
              ? FONTS.bold
              : variant === 'light'
              ? FONTS.light
              : variant === 'medium'
              ? FONTS.medium
              : '',
          fontSize: size,
          textAlign: centered ? 'center' : 'left',
        },
        style,
      ]}>
      {children}
    </Text>
  )
}

export default Typography
