import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 160,
    gap: 40,
    alignItems: 'center',
  },
  fieldContainer: {
    gap: 10,
  },
  raterContainer: {
    alignItems: 'center',
    gap: 10,
  },
  imageButton: {
    backgroundColor: COLORS.primary,
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
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
    width: 75,
    height: 75,
  },
  image: {
    width: 200,
    height: 200,
  },
})
