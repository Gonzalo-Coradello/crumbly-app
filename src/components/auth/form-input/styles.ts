import { StyleSheet } from 'react-native'
import { COLORS, FONTS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {},
  input: {
    borderBottomColor: COLORS.black,
    borderBottomWidth: 1,
    paddingVertical: 5,
    fontFamily: FONTS.light,
  },
  error: {
    marginTop: 5,
  },
})
