import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flexBasis: '45%',
  },
  backgroundImage: {
    aspectRatio: '1/1',
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
  },
  categoryName: {
    backgroundColor: COLORS.transparent,
    color: COLORS.white,
    paddingVertical: 5,
  },
})
