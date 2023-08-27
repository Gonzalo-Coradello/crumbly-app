import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, View } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'

type Props = {
  goBack: () => void
}

const HeaderArrow = ({ goBack }: Props) => {
  return (
    <TouchableOpacity style={styles.iconContainer} onPress={goBack}>
      <Ionicons name="arrow-back-circle-outline" size={30} color={COLORS.black} />
      <View style={styles.arrowBackground} />
    </TouchableOpacity>
  )
}

export default HeaderArrow
