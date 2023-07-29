import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { styles } from './styles'
import Typography from '../typography'

type Props = {
  text: string
  maxCh?: number
}

const Description = ({ text, maxCh = 110 }: Props) => {
  const [show, setShow] = useState(false)

  if (!text) return null

  return (
    <View style={styles.container}>
      <Typography variant="light" size={15}>
        {show ? text : `${text.slice(0, maxCh)}...`}
      </Typography>
      {text.length > maxCh && (
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Typography variant="medium" size={15} centered>
            {show ? 'ver menos' : 'ver más'}
          </Typography>
        </TouchableOpacity>
      )}
    </View>
  )
}

export default Description
