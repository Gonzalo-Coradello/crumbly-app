import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: COLORS.transparentDarker,
    flex: 1,
    margin: 0,
    marginBottom: -30,
  },
  modalContainer: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 15,
    paddingTop: 30,
    gap: 15,
  },
})
