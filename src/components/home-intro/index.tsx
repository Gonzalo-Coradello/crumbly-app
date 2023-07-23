import { Image, View, useWindowDimensions } from 'react-native'
import { homeImage } from 'src/images'

import { styles } from './styles'
import Typography from '../typography'
const HomeIntro = () => {
  const { width } = useWindowDimensions()

  const isTablet = width > 650
  return (
    <View>
      <Typography
        size={isTablet ? 40 : 28}
        style={isTablet ? styles.tabletHeading : styles.heading}>
        Buenos días, Gonzalo
      </Typography>
      <View style={styles.textContainer}>
        <Typography
          variant="extralight"
          size={isTablet ? 25 : 20}
          centered
          color="white"
          style={isTablet ? styles.tabletText : styles.text}>
          ¿Con qué vas a acompañar tu bebida favorita hoy?
        </Typography>
      </View>
      <Image
        source={homeImage}
        resizeMode="contain"
        style={isTablet ? styles.tabletImage : styles.image}
      />
    </View>
  )
}

export default HomeIntro
