import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { Image, ScrollView, View, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { Input, Typography } from 'src/components'
import { COLORS } from 'src/themes'
import { Category } from 'src/types'

import { styles } from './styles'

const CreateRecipe = () => {
  const imageSelected = false

  const categories: Category[] = useSelector(({ categories }) => categories.data)

  const [instructions, setInstructions] = useState<number[]>([1])

  const addStep = () => {
    setInstructions((prev) => prev.concat(prev[prev.length - 1] + 1))
  }

  const removeStep = (num: number) => {
    setInstructions((prev) => prev.filter((n) => n !== num))
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      overScrollMode="never"
      showsVerticalScrollIndicator={false}>
      <View style={styles.fieldContainer}>
        <Typography variant="semibold" size={18}>
          Título
        </Typography>
        <Input placeholder="Dale un nombre a tu receta" />
      </View>
      <View style={styles.fieldContainer}>
        <Typography variant="semibold" size={18}>
          Imagen
        </Typography>
        <TouchableOpacity style={styles.imageButton}>
          {imageSelected ? <Image source={{}} /> : <Ionicons name="add" size={25} color="black" />}
        </TouchableOpacity>
      </View>
      <View style={styles.fieldContainer}>
        <Typography variant="semibold" size={18}>
          Descripción
        </Typography>
        <Input placeholder="Escribe una breve descripción para tu receta" multiline />
      </View>
      <View style={styles.fieldContainer}>
        <Typography variant="semibold" size={18}>
          Ingredientes
        </Typography>
        <View>
          <TouchableOpacity style={styles.searchIngredients}>
            <Ionicons name="search" size={25} color={COLORS.darkGray} />
            <Typography color="gray">Escribe ingredientes</Typography>
          </TouchableOpacity>
        </View>
        <View>
          {[
            { ingredient: 'Manteca', quantity: 250, unit: 'gr' },
            { ingredient: 'Huevo', quantity: 2, unit: 'unidades' },
          ].map(({ ingredient, quantity, unit }) => (
            <View style={styles.ingredient} key={ingredient}>
              <View>
                {/* <Image /> */}
                <View>
                  <Typography variant="semibold" size={16}>
                    {ingredient}
                  </Typography>
                  <Typography variant="light">
                    {quantity} {unit}
                  </Typography>
                </View>
              </View>
              <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => {}}>
                  <Ionicons name="trash" size={25} color={COLORS.black} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}}>
                  <AntDesign name="edit" size={25} color={COLORS.black} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <Typography variant="semibold" size={18}>
          Instrucciones
        </Typography>
        {instructions.map((num, idx) => (
          <View key={num} style={styles.steps}>
            <View style={styles.step}>
              <Typography variant="semibold" size={18}>
                {idx + 1}
              </Typography>
              <View style={styles.stepInput}>
                <Input placeholder={`Añade el paso ${idx + 1}`} multiline />
              </View>
              <TouchableOpacity onPress={() => removeStep(num)}>
                <Ionicons name="trash" size={25} color={COLORS.black} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.button} onPress={addStep}>
          <Typography color="white">Añadir paso</Typography>
        </TouchableOpacity>
      </View>
      <View style={styles.fieldContainer}>
        <Typography variant="semibold" size={18}>
          Categoría
        </Typography>
        <View>
          <View style={styles.categoriesContainer}>
            {categories.map(({ id, name, backgroundImage }) => (
              <TouchableOpacity style={styles.category} key={id}>
                {/* <ImageBackground source={{ uri: backgroundImage }}> */}
                <Typography>{name}</Typography>
                {/* </ImageBackground> */}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Typography variant="medium" color="white" size={16}>
          Guardar cambios
        </Typography>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default CreateRecipe
