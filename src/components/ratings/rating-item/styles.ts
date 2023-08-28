import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  body: {
    gap: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 15,
  },
})
