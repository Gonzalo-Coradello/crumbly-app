import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  heading: {
    width: 200,
  },
  textContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 5,
  },
  text: {
    maxWidth: 280,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 250,
  },
})
