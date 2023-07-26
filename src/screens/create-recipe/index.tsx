import { ScrollView, View } from 'react-native'
import { Input, Typography } from 'src/components'

import { styles } from './styles'

const CreateRecipe = () => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View>
        <Typography variant="semibold" size={16}>
          Título
        </Typography>
        <Input placeholder="Dale un nombre a tu receta" />
      </View>
      <View>
        <Typography variant="semibold" size={16}>
          Imagen
        </Typography>
        <Typography>(Agregar botón para subir imagen)</Typography>
      </View>
      <View>
        <Typography variant="semibold" size={16}>
          Descripción
        </Typography>
        <Input placeholder="Escribe una breve descripción para tu receta" multiline />
      </View>
      <View>
        <Typography variant="semibold" size={16}>
          Ingredientes
        </Typography>
        <Input placeholder="Escribe ingredientes" />
      </View>
      <View>
        <Typography variant="semibold" size={16}>
          Instrucciones
        </Typography>
        <Input placeholder="Añade el paso uno" multiline />
        <Typography>Añadir paso</Typography>
      </View>
    </ScrollView>
  )
}

export default CreateRecipe
