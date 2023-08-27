import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    marginTop: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 275,
    height: 275,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 275,
    height: 275,
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: 'row',
    gap: 15,
  },
})
