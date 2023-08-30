import { Image, View, useWindowDimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { homeImage } from 'src/images'

import { styles } from './styles'
import Typography from '../../common/typography'
const HomeIntro = () => {
  const { width } = useWindowDimensions()
  const user = useSelector(({ users }) => users.current)

  const time = new Date().getHours()

  const timeOfDay =
    time > 19 || time < 5
      ? 'Buenas noches'
      : time <= 19 && time > 12
      ? 'Buenas tardes'
      : 'Buenos días'
  const name = user?.name?.split(' ')[0]

  const isTablet = width > 650
  return (
    <View>
      <Typography
        size={isTablet ? 40 : 28}
        style={isTablet ? styles.tabletHeading : styles.heading}>
        {timeOfDay}, {name}
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
