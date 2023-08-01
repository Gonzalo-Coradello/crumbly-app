import { Ionicons, AntDesign } from '@expo/vector-icons'
import { useState } from 'react'
import { ScrollView, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useInput } from 'src/hooks'
import {
  addIngredients,
  deleteIngredient,
  editIngredient,
} from 'src/store/ingredients/ingredients.slice'
import { COLORS } from 'src/themes'
import { Ingredient } from 'src/types'
import { transformQuantity, transformUnit } from 'src/utils'

import { styles } from './styles'
import EditIngredientModal from '../edit-ingredient-modal'
import Input from '../input'
import Typography from '../typography'

const SearchIngredients = () => {
  const dispatch = useDispatch()
  const ingredients: Ingredient[] = useSelector(({ ingredients }) => ingredients.data)
  const selectedIngredients: Ingredient[] = useSelector(({ ingredients }) => ingredients.selected)
  const selectedIngredientNames = selectedIngredients.map((i) => i.ingredient)
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null)
  const search = useInput()

  const ingredientList = ingredients.filter((i) =>
    i.ingredient.toLowerCase().includes(search.value.toLowerCase())
  )
  const isSelected = (ingredient: Ingredient) => {
    return selectedIngredientNames.includes(ingredient.ingredient)
  }

  const handleAdd = (ingredient: Ingredient) => {
    search.reset()
    dispatch(addIngredients([ingredient]))
  }

  const handleRemove = (ingredient: string) => {
    dispatch(deleteIngredient({ ingredient }))
  }

  const handleEdit = (ingredient: Ingredient) => {
    setSelectedIngredient(ingredient)
    setModalVisible(true)
  }

  const handleUpdate = (ingredient: Ingredient) => {
    dispatch(editIngredient({ ingredient }))
    setModalVisible(false)
  }

  return (
    <>
      <EditIngredientModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedIngredient={selectedIngredient}
        handleUpdate={handleUpdate}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        overScrollMode="never"
        showsVerticalScrollIndicator={false}>
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
                  <TouchableOpacity
                    onPress={() => {
                      handleRemove(ingredient.ingredient)
                    }}>
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
              {selectedIngredients?.map(({ ingredient, quantity, unit, units }) => (
                <View style={styles.ingredient} key={ingredient}>
                  <View>
                    {/* <Image /> */}
                    <View>
                      <Typography variant="semibold" size={16}>
                        {ingredient}
                      </Typography>
                      <Typography variant="light">
                        {transformQuantity(quantity)} {transformUnit(unit, quantity)}
                      </Typography>
                    </View>
                  </View>
                  <View style={styles.iconsContainer}>
                    <TouchableOpacity
                      onPress={() => {
                        handleRemove(ingredient)
                      }}>
                      <Ionicons name="trash" size={25} color={COLORS.black} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        handleEdit({ ingredient, quantity, units, unit })
                      }}>
                      <AntDesign name="edit" size={25} color={COLORS.black} />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
              {/* <TouchableOpacity style={styles.button} onPress={() => naviga}>
                <Typography color="white" size={18} centered>
                  Añadir ingredientes
                </Typography>
              </TouchableOpacity> */}
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
    </>
  )
}

export default SearchIngredients
