import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 15,
    flex: 1,
  },
  tabletContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 60,
  },
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    position: 'absolute',
    top: -58,
    left: 10,
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
  recipeList: {
    gap: 20,
    paddingVertical: 20,
  },
  empty: {
    marginTop: 30,
  },
})
