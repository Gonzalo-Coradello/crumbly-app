import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingTop: 30,
    paddingHorizontal: 15,
    gap: 30,
  },
  user: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
    gap: 15,
  },
  email: {
    color: COLORS.darkGray,
    lineHeight: 18,
  },
  logoutButton: {
    marginBottom: 30,
    // borderWidth: 1,
    // borderColor: COLORS.darkGray,
    borderRadius: 10,
    maxWidth: 120,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.white,
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
