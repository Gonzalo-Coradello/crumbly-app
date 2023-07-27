import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { User } from 'src/types'

import { styles } from './styles'
import Typography from '../typography'
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
          func={() => navigateTo('CreateList')}
          icon="add-circle-outline"
          title="Crear una lista nueva"
        />
        <UserRecipeListButton
          func={() => navigateTo('Recipes', 'favorites')}
          icon="star"
          title="Mis favoritas"
          recipesLength={user.favorites.length}
        />
        {user.lists.map(({ name, recipes }) => (
          <UserRecipeListButton
            key={name}
            func={() => navigateTo('Recipes', name)}
            title={name}
            recipesLength={recipes.length}
            icon="star"
          />
        ))}
      </View>
    </View>
  )
}

export default ProfileLists
