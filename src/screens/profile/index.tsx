import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Typography, ProfileCircle, ProfileLists, ProfileRecipes } from 'src/components'
import { ProfileNavigationProp } from 'src/types'

import { styles } from './styles'

const Profile = ({ navigation, route }: ProfileNavigationProp) => {
  const user = useSelector(({ users }) => users.current)

  // const navigateToRecipes = (list: string) => {
  //   navigation.navigate('Recipes', { categoryId: '', category: '', list })
  // }

  const navigateTo = (screenName: 'Recipes' | 'CreateList' | 'CreateRecipe', list?: string) => {
    const screen: any = screenName
    navigation.navigate(screen, { list })
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
      <ProfileLists navigateTo={navigateTo} />
      <ProfileRecipes navigateTo={navigateTo} />
    </View>
  )
}

export default Profile
