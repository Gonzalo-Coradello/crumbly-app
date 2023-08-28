import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 370,
  },
  contentContainer: {
    margin: 20,
    gap: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  recipeInfo: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  description: {
    marginTop: 10,
  },
  recipe: {
    gap: 15,
  },
  ingredients: {
    gap: 10,
    marginBottom: 10,
  },
  ingredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  steps: {
    paddingRight: 5,
    gap: 15,
  },
  step: {
    flexDirection: 'row',
    gap: 10,
  },
  ratingContainer: {
    alignItems: 'center',
    gap: 10,
    marginVertical: 15,
  },
})
