import { SafeAreaView } from 'react-native'

import { styles } from './styles'
import Typography from '../typography'

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Typography
        variant="bold"
        size={20}
        centered
        numberOfLines={1}
        ellipsizeMode="tail"
        style={styles.header}>
        {title}
      </Typography>
    </SafeAreaView>
  )
}

export default Header
