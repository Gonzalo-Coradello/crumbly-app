import { Platform, StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },
  tabletContainer: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 60,
    backgroundColor: COLORS.background,
  },
  safeArea: {
    backgroundColor: COLORS.background,
    paddingTop: Platform.OS === 'android' ? 15 : 0,
  },
})
