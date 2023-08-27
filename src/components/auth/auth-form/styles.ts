import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    backgroundColor: COLORS.white,
    width: '80%',
    maxWidth: 350,
    paddingHorizontal: 30,
    paddingVertical: 30,
    gap: 15,
  },
  formContainer: {
    gap: 15,
  },
})
