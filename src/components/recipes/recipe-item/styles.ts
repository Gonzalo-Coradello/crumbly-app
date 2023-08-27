import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabletContainer: {
    maxWidth: 600,
    alignSelf: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 260,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tabletImage: {
    width: '100%',
    aspectRatio: '1/1',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  body: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
})
