import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.transparentDarker,
    flex: 1,
    margin: 0,
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: '100%',
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
})
