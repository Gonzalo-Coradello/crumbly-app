import { ActivityIndicator, View } from 'react-native'
import { COLORS } from 'src/themes'

import { styles } from './styles'

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={25} color={COLORS.primary} />
    </View>
  )
}

export default Loader
