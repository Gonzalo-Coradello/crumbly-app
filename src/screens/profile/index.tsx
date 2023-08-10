import { ScrollView, View, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { Typography, ProfileCircle, ProfileLists, ProfileRecipes, Loader } from 'src/components'
import { useGetUserByIdQuery } from 'src/store/users/api'
import { ProfileNavigationProp } from 'src/types'

import { styles } from './styles'

const Profile = ({ navigation, route }: ProfileNavigationProp) => {
  const image = useSelector(({ auth }) => auth.value.image)
  // const user = useSelector(({ users }) => users.current)
  const localId = useSelector(({ auth }) => auth.value.localId)
  const { data, isLoading, isError, error } = useGetUserByIdQuery(localId)

  // const navigateToRecipes = (list: string) => {
  //   navigation.navigate('Recipes', { categoryId: '', category: '', list })
  // }

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
    </ScrollView>
  )
}

export default Profile
