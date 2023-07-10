import { View, Text } from 'react-native'

import { styles } from './styles'

type Props = {
  title: string
}

const Header = ({ title }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header
