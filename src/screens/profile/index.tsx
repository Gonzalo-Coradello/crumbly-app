import { useState } from 'react'
import { ScrollView, View, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Typography, ProfileCircle, ProfileLists, ProfileRecipes, Button } from 'src/components'
import ConfirmModal from 'src/components/common/confirm-modal'
import { deleteSession } from 'src/db'
import { clearUser } from 'src/store/auth/auth.slice'
import { ProfileNavigationProp } from 'src/types'

import { styles } from './styles'

const Profile = ({ navigation, route }: ProfileNavigationProp) => {
  const [modalVisible, setModalVisible] = useState(false)
  const dispatch = useDispatch()
  const image = useSelector(({ auth }) => auth.value.image)
  const localId = useSelector(({ auth }) => auth.value.localId)
  const user = useSelector(({ users }) => users.current)

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

  return (
    <>
      <ConfirmModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        message="¿Desea cerrar sesión?"
        confirmFunction={handleLogout}
      />
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
        <Button
          variant="small"
          fontWeight="medium"
          marginBottom={30}
          onPress={() => setModalVisible(true)}>
          Cerrar sesión
        </Button>
      </ScrollView>
    </>
  )
}

export default Profile
