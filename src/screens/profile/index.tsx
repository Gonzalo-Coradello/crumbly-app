import { View } from 'react-native'
import { Typography, ProfileCircle, ProfileLists, ProfileRecipes } from 'src/components'

import { styles } from './styles'

const Profile = () => {
  const user = {
    name: 'Gonzalo Coradello',
    email: 'gonzalocoradello@gmail.com',
  }
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <ProfileCircle crumbly={false} size={50} />
        <View>
          <Typography variant="semibold" size={22} style={{ lineHeight: 26 }}>
            {user.name}
          </Typography>
          <Typography variant="medium" style={styles.email}>
            {user.email}
          </Typography>
        </View>
      </View>
      <ProfileLists />
      <ProfileRecipes />
    </View>
  )
}

export default Profile
