import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {},
  goBack: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  goBackText: {
    fontSize: 14,
    color: COLORS.text,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  recipeList: {
    gap: 20,
  },
})
