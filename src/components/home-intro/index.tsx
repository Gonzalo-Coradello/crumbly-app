import { Image, Text, View } from 'react-native'

import { styles } from './styles'

const HomeIntro = () => {
  return (
    <View>
      <Text>Buenos días, Isabella</Text>
      <View>
        <Text>¿Con qué vas a acompañar tu bebida favorita hoy? ☕</Text>
      </View>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2020/07/21/17/31/coffee-5426922_960_720.jpg',
        }}
        // resizeMode="cover"
        style={styles.image}
      />
    </View>
  )
}

export default HomeIntro