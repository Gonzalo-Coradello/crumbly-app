import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
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
})
