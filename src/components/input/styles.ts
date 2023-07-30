import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'
import { FONTS } from 'src/themes/fonts'

export const styles = StyleSheet.create({
  container: {
    minWidth: '85%',
  },
  input: {
    maxHeight: 120,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: COLORS.black,
    fontFamily: FONTS.regular,
    fontSize: 14,
    width: '100%',
  },
})
