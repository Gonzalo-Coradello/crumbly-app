import { View } from 'react-native'

import { styles } from './styles'
import Typography from '../typography'

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Typography variant="bold" size={20} centered>
        {title}
      </Typography>
    </View>
  )
}

export default Header
