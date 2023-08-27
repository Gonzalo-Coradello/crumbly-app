import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 10,
    position: 'relative',
  },
  arrowBackground: {
    backgroundColor: COLORS.white,
    width: 22,
    height: 22,
    borderRadius: 15,
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    marginTop: 5,
    marginLeft: 2.5,
  },
})
