import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { User } from 'src/types'

import { styles } from './styles'
import Typography from '../../common/typography'
import UserRecipeListButton from '../user-recipe-list-button'

type Props = {
  navigateTo: (screenName: 'Recipes' | 'CreateList' | 'CreateRecipe', list?: string) => void
}

const ProfileLists = ({ navigateTo }: Props) => {
  const user: User = useSelector(({ users }) => users.current)

  return (
    <View style={styles.container}>
      <Typography variant="medium" size={20} style={styles.title}>
        Mis listas
      </Typography>
      <View style={styles.listsContainer}>
        <UserRecipeListButton
          onPress={() => navigateTo('CreateList')}
          icon="add-circle-outline"
          title="Crear una lista nueva"
        />
        <UserRecipeListButton
          onPress={() => navigateTo('Recipes', 'favorites')}
          icon="star"
          title="Mis favoritas"
          recipesLength={user.favorites?.length}
        />
        {user.lists?.map(({ name, recipes }) => (
          <UserRecipeListButton
            key={name}
            onPress={() => navigateTo('Recipes', name)}
            title={name}
            recipesLength={recipes?.length}
            icon="book-outline"
          />
        ))}
      </View>
    </View>
  )
}

export default ProfileLists
