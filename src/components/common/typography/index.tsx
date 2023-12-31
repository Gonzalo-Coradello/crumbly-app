import { Text, TextProps } from 'react-native'
import { FONTS, COLORS } from 'src/themes'

interface Props extends TextProps {
  variant?: 'bold' | 'semibold' | 'medium' | 'regular' | 'light' | 'extralight'
  size?: number
  centered?: boolean
  style?: object
  color?: 'black' | 'white' | 'gray' | 'primary' | 'error'
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
          color:
            color === 'black'
              ? COLORS.text
              : color === 'white'
              ? COLORS.white
              : color === 'primary'
              ? COLORS.primary
              : color === 'error'
              ? COLORS.error
              : COLORS.darkGray,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  )
}

export default Typography
