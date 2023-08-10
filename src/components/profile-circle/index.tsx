import { Ionicons } from '@expo/vector-icons'
import { View, Image } from 'react-native'
// import { useSelector } from 'react-redux'
// import { User } from 'src/types'

import { styles } from './styles'
// import Typography from '../typography'

type Props = {
  size: number
  crumbly?: boolean
  picture: string
}

const ProfileCircle = ({ size, crumbly = false, picture }: Props) => {
  // const user: User = useSelector(({ users }) => users.current)
  // const { name, picture } = crumbly ? { name: 'Crumbly', picture: '' } : user

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size, borderRadius: size / 2, borderWidth: picture ? 0 : 1 },
      ]}>
      {picture ? (
        <Image source={{ uri: picture }} style={styles.image} />
      ) : (
        // <Typography variant="bold" size={size / 2} style={styles.text}>
        //   {name.charAt(0)}
        // </Typography>
        <Ionicons size={size / 1.5} name="person" />
      )}
    </View>
  )
}

export default ProfileCircle
