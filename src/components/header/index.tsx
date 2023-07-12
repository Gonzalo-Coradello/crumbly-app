import { View } from 'react-native'
import { Typography } from 'src/components'

import { styles } from './styles'

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Typography variant="bold" size={25} centered>
        {title}
      </Typography>
    </View>
  )
}

export default Header
