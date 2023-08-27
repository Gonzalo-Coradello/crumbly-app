import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  primary: {
    backgroundColor: COLORS.primary,
  },
  disabled: {
    backgroundColor: COLORS.gray,
  },
  delete: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.error,
  },
  small: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
})
