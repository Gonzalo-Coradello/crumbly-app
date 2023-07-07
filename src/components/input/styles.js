import { StyleSheet } from 'react-native'

import { COLORS } from '../../themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: COLORS.black,
    fontSize: 14,
    height: 35,
  },
})
