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
    margin: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  recipeInfo: {},
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  description: {
    marginTop: 5,
  },
  recipe: {
    marginVertical: 15,
  },
  ingredients: {
    gap: 10,
    marginBottom: 15,
  },
  ingredient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingVertical: 10,
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
  },
  step: {
    flexDirection: 'row',
    gap: 10,
  },
  ratingContainer: {
    alignItems: 'center',
    gap: 5,
    marginBottom: 15,
  },
})
