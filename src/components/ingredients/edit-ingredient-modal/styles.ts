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
    height: 300,
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 15,
  },
  contentContainer: {
    gap: 30,
    paddingVertical: 30,
  },
  row: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
  },
  column: {
    flexBasis: '40%',
    gap: 15,
  },
  unitSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: 45,
    maxHeight: 120,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: COLORS.black,
    fontSize: 14,
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.darkGray,
  },
  optionMenu: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    maxHeight: 150,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    zIndex: 100,
  },
  optionMenuContent: {
    gap: 10,
  },
})
