import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { User } from 'src/types'

import { styles } from './styles'
import Typography from '../typography'
import UserRecipeListButton from '../user-recipe-list-button'

type Props = {
  navigateTo: (screenName: 'Recipes' | 'CreateList' | 'CreateRecipe', list?: string) => void
}

const ProfileRecipes = ({ navigateTo }: Props) => {
  const user: User = useSelector(({ users }) => users.current)

  return (
    <View style={styles.container}>
      <Typography variant="medium" size={20} style={styles.title}>
        Mis recetas
      </Typography>
      <View style={styles.recipesContainer}>
        <TouchableOpacity onPress={() => navigateTo('CreateRecipe')} style={styles.addRecipeButton}>
          <Ionicons name="add-circle-outline" size={28} color="black" />
          <Typography>Crea tu propia receta</Typography>
        </TouchableOpacity>
        <UserRecipeListButton
          onPress={() => navigateTo('Recipes', 'author')}
          icon="book-outline"
          title="Mis recetas"
          recipesLength={user.recipes?.length}
        />
      </View>
    </View>
  )
}

export default ProfileRecipes
