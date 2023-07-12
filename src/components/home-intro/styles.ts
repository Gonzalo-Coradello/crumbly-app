import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  heading: {
    width: 200,
  },
  tabletHeading: {
    width: 280,
    marginBottom: 15,
  },
  textContainer: {
    maxWidth: 450,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
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
    maxWidth: 350,
    alignSelf: 'center',
    paddingHorizontal: 30,
  },
  tabletText: {
    maxWidth: 420,
    alignSelf: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: '100%',
    minHeight: 250,
  },
  tabletImage: {
    minHeight: 450,
  },
})
