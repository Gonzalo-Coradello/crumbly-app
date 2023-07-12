import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  backgroundImage: {
    height: 150,
    width: 150,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
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
  categoryName: {
    color: COLORS.white,
    backgroundColor: COLORS.black,
    width: '100%',
    paddingVertical: 5,
  },
})
