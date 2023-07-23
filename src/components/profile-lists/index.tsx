import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { User } from 'src/types'

import { styles } from './styles'
import Typography from '../typography'

const ProfileLists = () => {
  const user: User = useSelector(({ users }) => users.current)

  return (
    <View style={styles.container}>
      <Typography variant="medium" size={20} style={styles.title}>
        Mis listas
      </Typography>
      <View style={styles.listsContainer}>
        <TouchableOpacity style={styles.addListButton}>
          <Ionicons name="add-circle-outline" size={28} color="black" />
          <Typography>Crear una lista nueva</Typography>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favorites}>
          <FontAwesome name="star-o" size={28} color="black" />
          <View>
            <Typography variant="semibold" size={16}>
              Mis favoritas
            </Typography>
            <Typography variant="light">
              {user.favorites.length === 1 ? '1 receta' : `${user.favorites.length} recetas`}
            </Typography>
          </View>
        </TouchableOpacity>
        {user.lists.map(({ name, recipes }) => (
          <TouchableOpacity key={name} style={styles.favorites}>
            <FontAwesome name="star-o" size={28} color="black" />
            <View>
              <Typography variant="semibold" size={16}>
                {name}
              </Typography>
              <Typography variant="light">
                {recipes.length === 1 ? '1 receta' : `${recipes.length} recetas`}
              </Typography>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default ProfileLists
