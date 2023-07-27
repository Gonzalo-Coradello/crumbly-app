import { Ionicons } from '@expo/vector-icons'
import { View, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromList } from 'src/store/users/users.slice'
import { Recipe, User } from 'src/types'

import { styles } from './styles'
import ProfileCircle from '../profile-circle'
import Typography from '../typography'

interface Props extends Recipe {
  handleNavigate: (recipeId: string, recipeName: string) => void
  openModal: (id: string) => void
}

const RecipeItem = ({
  id,
  name,
  image,
  authorId,
  fromCrumbly,
  handleNavigate,
  openModal,
}: Props) => {
  const { width } = useWindowDimensions()
  const user: User = useSelector(({ users }) => users.current)

  const dispatch = useDispatch()

  const isFavorite = user.favorites.includes(id)
  const isSaved = user.lists.find((list) => list.recipes.includes(id))

  const remove = () => {
    dispatch(removeFromList({ id, listName: isFavorite ? 'favorites' : isSaved?.name }))
  }

  const author = fromCrumbly ? 'Crumbly' : 'Someone'

  const isTablet = width > 650
  return (
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
            <ProfileCircle size={30} crumbly={fromCrumbly} />
            <Typography size={isTablet ? 20 : 14}>{author}</Typography>
          </View>
          <View style={styles.iconsContainer}>
            <Ionicons name="arrow-redo-outline" size={25} />
            {isSaved || isFavorite ? (
              <TouchableOpacity onPress={remove}>
                <Ionicons name="bookmark" size={25} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => openModal(id)}>
                <Ionicons name="bookmark-outline" size={25} />
              </TouchableOpacity>
            )}
            {/* <Ionicons name="add-circle-outline" size={25} /> */}
          </View>
        </View>
      </View>
    </View>
  )
}

export default RecipeItem
