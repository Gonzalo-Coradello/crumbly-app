import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderColor: COLORS.black,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    paddingTop: 5,
  },
})
