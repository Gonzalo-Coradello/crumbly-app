import { View, Image } from 'react-native'

import { styles } from './styles'
import Typography from '../typography'

type Props = {
  size: number
}

const ProfileCircle = ({ size }: Props) => {
  const username = 'Crumbly'
  const image = 'https://randomuser.me/api/portraits/men/32.jpg'
  // const image = ''

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2, borderWidth: image ? 0 : 3 },
      ]}>
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Typography variant="bold" size={size / 2} style={styles.text}>
          {username.charAt(0)}
        </Typography>
      )}
    </View>
  )
}

export default ProfileCircle
