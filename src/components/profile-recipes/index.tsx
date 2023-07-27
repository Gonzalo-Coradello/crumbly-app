import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'

import { styles } from './styles'
import Typography from '../typography'

type Props = {
  navigateTo: (screenName: 'Recipes' | 'CreateList' | 'CreateRecipe', list?: string) => void
}

const ProfileRecipes = ({ navigateTo }: Props) => {
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
      </View>
    </View>
  )
}

export default ProfileRecipes