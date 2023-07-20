import { Text } from 'react-native'
import { COLORS } from 'src/themes'
import { FONTS } from 'src/themes/fonts'

type Props = {
  variant?: 'bold' | 'medium' | 'regular' | 'light'
  size?: number
  centered?: boolean
  style?: object
  color?: 'black' | 'white'
  children: React.ReactNode
}

const Typography = ({
  variant = 'regular',
  size,
  centered,
  color = 'black',
  style,
  children,
}: Props) => {
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
          color: color === 'black' ? COLORS.text : COLORS.white,
        },
        style,
      ]}>
      {children}
    </Text>
  )
}

export default Typography
