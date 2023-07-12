import { Image, View } from 'react-native'
import { Typography } from 'src/components'

import { styles } from './styles'

const HomeIntro = () => {
  return (
    <View>
      <Typography size={30} style={styles.heading}>
        Buenos días, Isabella
      </Typography>
      <View style={styles.textContainer}>
        <Typography variant="light" size={20} centered style={styles.text}>
          ¿Con qué vas a acompañar tu bebida favorita hoy? ☕
        </Typography>
      </View>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2020/07/21/17/31/coffee-5426922_960_720.jpg',
        }}
        style={styles.image}
      />
    </View>
  )
}

export default HomeIntro
