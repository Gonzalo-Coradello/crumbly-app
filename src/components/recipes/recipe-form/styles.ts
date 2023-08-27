import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 45,
    gap: 30,
  },
  fieldContainer: {
    gap: 10,
  },
  imageButton: {
    backgroundColor: COLORS.primary,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageButtonSmall: {
    width: 50,
    height: 50,
  },
  image: {
    width: 200,
    height: 200,
  },
  searchIngredients: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 10,
    minHeight: 45,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  ingredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginVertical: 10,
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
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  steps: {},
  step: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  stepInput: {
    flexBasis: '85%',
  },
  categoriesContainer: {
    width: '90%',
    gap: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'center',
    justifyContent: 'center',
  },
})
