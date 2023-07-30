import { Platform, StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  modalContainer: {
    paddingTop: Platform.OS === 'ios' ? 45 : 0,
    width: '100%',
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 25,
  },
  contentContainer: {
    gap: 15,
    paddingTop: 15,
    paddingBottom: 30,
  },
  searchIngredients: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 45,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  ingredients: {
    gap: 20,
    paddingBottom: 60,
  },
  ingredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 15,
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
  selected: {
    backgroundColor: COLORS.primary,
  },
  resetSearchButton: {
    position: 'absolute',
    right: 0,
    padding: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
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
  },
})
