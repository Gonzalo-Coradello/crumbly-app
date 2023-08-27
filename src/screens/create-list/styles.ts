import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    fontSize: 16,
    width: '80%',
    borderBottomColor: COLORS.darkGray,
    borderBottomWidth: 1,
    height: 30,
  },
})
