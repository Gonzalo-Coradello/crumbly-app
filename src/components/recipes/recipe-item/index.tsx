import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { View, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserByIdQuery, useUpdateUserMutation } from 'src/store/users/api'
import { removeFromList } from 'src/store/users/users.slice'
import { Recipe, User } from 'src/types'

import { styles } from './styles'
import ConfirmModal from '../../common/confirm-modal'
import Typography from '../../common/typography'
import ProfileCircle from '../../profile/profile-circle'

interface Props extends Recipe {
  handleNavigate: (recipeId: string, recipeName: string) => void
  openModal: (id: string) => void
}

const RecipeItem = ({ id, name, image, authorId, handleNavigate, openModal }: Props) => {
  const { width } = useWindowDimensions()
  const [modalVisible, setModalVisible] = useState(false)
  const user: User = useSelector(({ users }) => users.current)
  const { data: author, isLoading, isError } = useGetUserByIdQuery(authorId)
  const [updateUser] = useUpdateUserMutation()

  const dispatch = useDispatch()

  const isFavorite = user.favorites?.includes(id)
  const isSaved = user.lists?.find((list) => list.recipes?.includes(id))

  const remove = async () => {
    setModalVisible(false)
    dispatch(removeFromList({ id, listName: isFavorite ? 'favorites' : isSaved?.name }))
    if (isFavorite) {
      const updatedFavorites = user.favorites?.filter((r) => r !== id)
      await updateUser({ localId: user.localId, favorites: updatedFavorites })
    } else {
      const updatedList = {
        name: isSaved?.name,
        recipes: isSaved?.recipes.filter((r) => r !== id),
      }
      const updatedLists = user.lists?.map((l) => (l.name === isSaved?.name ? updatedList : l))
      await updateUser({ localId: user.localId, lists: updatedLists })
    }
  }

  if (isLoading) return

  if (isError) {
    return (
      <View>
        <Typography>Ha ocurrido un error</Typography>
      </View>
    )
  }

  const isTablet = width > 650
  return (
    <>
      <ConfirmModal
        confirmFunction={remove}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        message={`¿Desea eliminar esta receta de ${isFavorite ? 'tus favoritos' : isSaved?.name}?`}
      />
      <View style={isTablet ? styles.tabletContainer : styles.container}>
        <TouchableOpacity onPress={() => handleNavigate(id, name)}>
          <Image source={{ uri: image }} style={isTablet ? styles.tabletImage : styles.image} />
        </TouchableOpacity>
        <View style={styles.body}>
          <Typography variant="bold" size={isTablet ? 25 : 14}>
            {name}
          </Typography>
          <View style={styles.row}>
            <View style={styles.profile}>
              <ProfileCircle size={30} picture={author?.image} />
              <Typography size={isTablet ? 20 : 14}>{author?.name}</Typography>
            </View>
            <View style={styles.iconsContainer}>
              <Ionicons name="arrow-redo-outline" size={25} />
              {isSaved || isFavorite ? (
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Ionicons name="bookmark" size={25} />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => openModal(id)}>
                  <Ionicons name="bookmark-outline" size={25} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>
    </>
  )
}

export default RecipeItem
