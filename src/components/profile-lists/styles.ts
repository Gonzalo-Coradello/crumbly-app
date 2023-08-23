import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginLeft: 15,
  },
  listsContainer: {
    flex: 1,
    gap: 15,
    marginTop: 10,
  },
  addListButton: {
    height: 75,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
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
  favorites: {
    height: 75,
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
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
