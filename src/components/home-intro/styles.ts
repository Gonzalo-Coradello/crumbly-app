import { StyleSheet } from 'react-native'
import { COLORS } from 'src/themes'

export const styles = StyleSheet.create({
  heading: {
    width: 200,
    marginBottom: 30,
  },
  tabletHeading: {
    width: 280,
    marginBottom: 15,
  },
  textContainer: {
    maxWidth: 450,
    alignSelf: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
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
    maxWidth: 320,
    alignSelf: 'center',
    paddingHorizontal: 15,
    lineHeight: 30,
  },
  tabletText: {
    maxWidth: 420,
    alignSelf: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 300,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
  tabletImage: {
    minHeight: 450,
  },
})
