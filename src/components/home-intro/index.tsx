import { Image, View, useWindowDimensions } from 'react-native'
import { Typography } from 'src/components'

import { styles } from './styles'

const HomeIntro = () => {
  const { width } = useWindowDimensions()

  const isTablet = width > 650
  return (
    <View>
      <Typography
        size={isTablet ? 40 : 30}
        style={isTablet ? styles.tabletHeading : styles.heading}>
        Buenos días, Isabella
      </Typography>
      <View style={styles.textContainer}>
        <Typography
          variant="light"
          size={isTablet ? 25 : 20}
          centered
          style={isTablet ? styles.tabletText : styles.text}>
          ¿Con qué vas a acompañar tu bebida favorita hoy? ☕
        </Typography>
      </View>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2020/07/21/17/31/coffee-5426922_960_720.jpg',
        }}
        resizeMode="contain"
        style={isTablet ? styles.tabletImage : styles.image}
      />
    </View>
  )
}

export default HomeIntro
