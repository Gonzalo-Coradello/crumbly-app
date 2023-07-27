import { Ionicons } from '@expo/vector-icons'
import { View, TouchableOpacity } from 'react-native'

import { styles } from './styles'
import Typography from '../typography'

type Props = {
  func: () => void
  title: string
  icon: 'add-circle-outline' | 'star'
  recipesLength?: number
}

const UserRecipeListButton = ({
  func,
  title,
  icon = 'add-circle-outline',
  recipesLength,
}: Props) => {
  return (
    <TouchableOpacity onPress={func} style={styles.favorites}>
      <Ionicons name={icon} size={28} color="black" />
      <View>
        <Typography
          variant={recipesLength !== undefined ? 'semibold' : 'regular'}
          size={recipesLength !== undefined ? 16 : 14}>
          {title}
        </Typography>
        {recipesLength !== undefined ? (
          <Typography variant="light">
            {recipesLength === 1 ? '1 receta' : `${recipesLength} recetas`}
          </Typography>
        ) : null}
      </View>
    </TouchableOpacity>
  )
}

export default UserRecipeListButton
