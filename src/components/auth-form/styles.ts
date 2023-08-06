import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // maxHeight: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    width: '80%',
    maxWidth: 350,
    paddingHorizontal: 30,
    paddingVertical: 30,
    gap: 15,
  },
  formContainer: {
    gap: 15,
  },
  footerContainer: {},
  button: {
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    zIndex: -10,
  },
  disabledButton: {
    backgroundColor: COLORS.gray,
  },
})
