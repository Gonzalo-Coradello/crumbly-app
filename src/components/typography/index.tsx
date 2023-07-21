import { Text, TextProps } from 'react-native'
import { FONTS, COLORS } from 'src/themes'

interface Props extends TextProps {
  variant?: 'bold' | 'semibold' | 'medium' | 'regular' | 'light' | 'extralight'
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
  ...props
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
              : variant === 'semibold'
              ? FONTS.semibold
              : variant === 'medium'
              ? FONTS.medium
              : variant === 'light'
              ? FONTS.light
              : variant === 'extralight'
              ? FONTS.extralight
              : '',
          fontSize: size,
          textAlign: centered ? 'center' : 'left',
          color: color === 'black' ? COLORS.text : COLORS.white,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  )
}

export default Typography
