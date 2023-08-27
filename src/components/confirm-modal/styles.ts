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
    maxHeight: 250,
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 15,
    gap: 15,
    paddingVertical: 40,
  },
  contentContainer: {},
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  button: {
    backgroundColor: COLORS.primary,
    alignSelf: 'center',
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
  },
})
