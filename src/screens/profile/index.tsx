import { ScrollView, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, ProfileCircle, ProfileLists, ProfileRecipes, Loader } from 'src/components'
import { deleteSession } from 'src/db'
import { clearUser } from 'src/store/auth/auth.slice'
import { useGetUserByIdQuery } from 'src/store/users/api'
import { ProfileNavigationProp } from 'src/types'

import { styles } from './styles'

const Profile = ({ navigation, route }: ProfileNavigationProp) => {
  const dispatch = useDispatch()
  const image = useSelector(({ auth }) => auth.value.image)
  const localId = useSelector(({ auth }) => auth.value.localId)
  const user = useSelector(({ users }) => users.current)
  // const { data, isLoading, isError, error } = useGetUserByIdQuery(localId)

  const navigateTo = (
    screenName: 'Recipes' | 'CreateList' | 'CreateRecipe' | 'ImagePicker',
    list?: string
  ) => {
    const screen: any = screenName
    navigation.navigate(screen, { list })
  }

  const handleLogout = async () => {
    dispatch(clearUser())
    await deleteSession(localId)
  }

  // if (isError) {
  //   console.warn(error)
  //   return <Typography>Ha ocurrido un error</Typography>
  // }

  // if (isLoading) {
  //   return <Loader />
  // }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}>
      <View style={styles.user}>
        <TouchableOpacity onPress={() => navigateTo('ImagePicker')}>
          <ProfileCircle picture={image || user.image} size={60} />
        </TouchableOpacity>
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
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Typography variant="medium" centered>
          Cerrar sesión
        </Typography>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Profile
