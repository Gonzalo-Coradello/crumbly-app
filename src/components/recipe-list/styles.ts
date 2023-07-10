import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 15,
    flex: 1,
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  recipeList: {
    gap: 20,
    paddingVertical: 20,
  },
  empty: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
  },
})
