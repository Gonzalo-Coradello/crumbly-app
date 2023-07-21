import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flexBasis: '45%',
    borderRadius: 8,
    overflow: 'hidden',
  },
  backgroundImage: {
    // aspectRatio: '1/1',
    height: 175,
    backgroundColor: COLORS.black,
    justifyContent: 'flex-end',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
  },
  nameContainer: {
    width: '100%',
    height: 40,
    backgroundColor: COLORS.transparent,
    justifyContent: 'center',
  },
  categoryName: {
    color: COLORS.white,
    paddingHorizontal: 10,
    lineHeight: 16,
    paddingTop: 5,
  },
})
