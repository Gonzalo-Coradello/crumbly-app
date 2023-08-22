import { ScrollView, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, ProfileCircle, ProfileLists, ProfileRecipes, Loader } from 'src/components'
import { clearUser } from 'src/store/auth/auth.slice'
import { useGetUserByIdQuery } from 'src/store/users/api'
import { ProfileNavigationProp } from 'src/types'

import { styles } from './styles'

const Profile = ({ navigation, route }: ProfileNavigationProp) => {
  const dispatch = useDispatch()
  const image = useSelector(({ auth }) => auth.value.image)
  const localId = useSelector(({ auth }) => auth.value.localId)
  const { data, isLoading, isError, error } = useGetUserByIdQuery(localId)

  const navigateTo = (
    screenName: 'Recipes' | 'CreateList' | 'CreateRecipe' | 'ImagePicker',
    list?: string
  ) => {
    const screen: any = screenName
    navigation.navigate(screen, { list })
  }

  if (isError) {
    console.warn(error)
    return <Typography>Ha ocurrido un error</Typography>
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}>
      <View style={styles.user}>
        <TouchableOpacity onPress={() => navigateTo('ImagePicker')}>
          <ProfileCircle picture={image || data.image} size={60} />
        </TouchableOpacity>
        <View>
          <Typography variant="semibold" size={22} style={{ lineHeight: 26 }}>
            {data.name}
          </Typography>
          <Typography variant="medium" style={styles.email}>
            {data.email}
          </Typography>
        </View>
      </View>
      <ProfileLists navigateTo={navigateTo} />
      <ProfileRecipes navigateTo={navigateTo} />
      <TouchableOpacity style={styles.logoutButton} onPress={() => dispatch(clearUser())}>
        <Typography variant="medium" centered>
          Cerrar sesión
        </Typography>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default Profile
