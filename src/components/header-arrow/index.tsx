import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

import { styles } from './styles'

type Props = {
  goBack: () => void
}

const HeaderArrow = ({ goBack }: Props) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
      <Ionicons name="arrow-back" size={30} />
    </TouchableOpacity>
  )
}

export default HeaderArrow
