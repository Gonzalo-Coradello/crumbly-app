import { Ionicons, AntDesign } from '@expo/vector-icons'
import { Modal, ScrollView, TouchableOpacity, View } from 'react-native'
import { useInput } from 'src/hooks'
import { COLORS } from 'src/themes'
import { Ingredient } from 'src/types'

import { styles } from './styles'
import Input from '../input'
import Typography from '../typography'

type Props = {
  modalVisible: boolean
  setModalVisible: (visible: boolean) => void
  addIngredient: (ingredient: Ingredient) => void
  selectedIngredients: Ingredient[]
}

const ingredients: Ingredient[] = [
  { ingredient: 'Huevo', quantity: 1, unit: 'unidad' },
  { ingredient: 'Harina de trigo', quantity: 1, unit: 'gramo' },
  { ingredient: 'Manteca', quantity: 1, unit: 'gramo' },
  { ingredient: 'Aceite', quantity: 1, unit: 'mililitro' },
  { ingredient: 'Polvo para hornear', quantity: 1, unit: 'gramo' },
  { ingredient: 'Azúcar', quantity: 1, unit: 'gramo' },
  { ingredient: 'Leche', quantity: 1, unit: 'mililitro' },
  { ingredient: 'Miel', quantity: 1, unit: 'cucharadita' },
  { ingredient: 'Crema de leche', quantity: 1, unit: 'mililitro' },
  { ingredient: 'Yogur', quantity: 1, unit: 'mililitro' },
  { ingredient: 'Cacao amargo', quantity: 1, unit: 'cucharadita' },
  { ingredient: 'Cacao dulce', quantity: 1, unit: 'cucharadita' },
  { ingredient: 'Chocolate', quantity: 1, unit: 'gramo' },
  { ingredient: 'Sal', quantity: 1, unit: 'pizca' },
  { ingredient: 'Esencia de vainilla', quantity: 1, unit: 'cucharadita' },
  { ingredient: 'Canela', quantity: 1, unit: 'cucharadita' },
  { ingredient: 'Azúcar glass', quantity: 1, unit: 'gramo' },
  { ingredient: 'Azúcar de mascabo', quantity: 1, unit: 'gramo' },
  { ingredient: 'Azúcar rubia', quantity: 1, unit: 'gramo' },
  { ingredient: 'Azúcar morena', quantity: 1, unit: 'gramo' },
]

const IngredientsModal = ({
  modalVisible,
  setModalVisible,
  addIngredient,
  selectedIngredients,
}: Props) => {
  const search = useInput()

  const ingredientList = ingredients.filter((i) =>
    i.ingredient.toLowerCase().includes(search.value.toLowerCase())
  )
  const isSelected = (ingredient: Ingredient) => {
    return selectedIngredients.includes(ingredient)
  }

  const handleAdd = (ingredient: Ingredient) => {
    search.reset()
    addIngredient(ingredient)
  }

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="slide"
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}>
      <ScrollView
        style={styles.modalContainer}
        contentContainerStyle={styles.contentContainer}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Ionicons name="close-circle-outline" size={30} />
        </TouchableOpacity>
        <Typography variant="semibold" size={20} centered>
          Ingredientes
        </Typography>
        <View style={styles.searchIngredients}>
          <Ionicons name="search" size={25} color={COLORS.darkGray} />
          <Input placeholder="Escribe ingredientes" borderless {...search} />
          {search.value && (
            <TouchableOpacity style={styles.resetSearchButton} onPress={search.reset}>
              <Ionicons name="close-circle-outline" size={28} color={COLORS.black} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.ingredients}>
          {search.value ? (
            ingredientList.map((ingredient) => (
              <View
                style={
                  isSelected(ingredient) ? [styles.ingredient, styles.selected] : styles.ingredient
                }
                key={ingredient.ingredient}>
                <Typography variant="semibold" size={15}>
                  {ingredient.ingredient.charAt(0).toUpperCase() + ingredient.ingredient.slice(1)}
                </Typography>
                {isSelected(ingredient) ? (
                  <TouchableOpacity onPress={() => {}}>
                    <Ionicons name="trash-outline" size={28} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => handleAdd(ingredient)}>
                    <Ionicons name="add-circle-outline" size={28} />
                  </TouchableOpacity>
                )}
              </View>
            ))
          ) : (
            <>
              {selectedIngredients.map(({ ingredient, quantity, unit }) => (
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
              <TouchableOpacity style={styles.button}>
                <Typography color="white" size={18} centered>
                  Añadir ingredientes
                </Typography>
              </TouchableOpacity>
            </>
          )}
          {ingredientList.length === 0 && (
            <TouchableOpacity>
              <Typography size={16} centered>
                Agregar "{search.value}"
              </Typography>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </Modal>
  )
}

export default IngredientsModal
