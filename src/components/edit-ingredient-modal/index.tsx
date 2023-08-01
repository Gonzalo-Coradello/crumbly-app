import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useInput } from 'src/hooks'
import { COLORS } from 'src/themes'
import { Ingredient } from 'src/types'
import { transformUnit } from 'src/utils'

import { styles } from './styles'
import Input from '../input'
import Typography from '../typography'

type Props = {
  modalVisible: boolean
  setModalVisible: (visible: boolean) => void
  selectedIngredient: Ingredient | null
  handleUpdate: (ingredient: Ingredient) => void
}

const EditIngredientModal = ({
  modalVisible,
  setModalVisible,
  selectedIngredient,
  handleUpdate,
}: Props) => {
  const quantity = useInput(selectedIngredient?.quantity.toString())
  const [optionMenuOpen, setOptionMenuOpen] = useState(false)
  const [unit, setUnit] = useState('')

  const handleClose = () => {
    Keyboard.dismiss()
    setOptionMenuOpen(false)
  }

  const handleSelectUnit = (unit: string) => {
    setUnit(unit)
    setOptionMenuOpen(false)
  }

  useEffect(() => {
    if (selectedIngredient) {
      setUnit(selectedIngredient.unit)
    }
  }, [selectedIngredient])

  if (!selectedIngredient) return null

  return (
    <Modal
      visible={modalVisible}
      transparent
      animationType="fade"
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={styles.container} />
      </TouchableWithoutFeedback>
      <KeyboardAvoidingView behavior="padding" style={styles.modalContainer}>
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={styles.contentContainer}>
            <Typography variant="semibold" size={20} centered>
              {selectedIngredient.ingredient}
            </Typography>
            <View style={styles.row}>
              <View style={styles.column}>
                <Typography centered size={16}>
                  Cantidad
                </Typography>
                <Input
                  value={quantity.value}
                  onChangeText={quantity.onChangeText}
                  numeric
                  placeholder=""
                />
              </View>
              <View style={styles.column}>
                <Typography centered size={16}>
                  Unidades
                </Typography>
                <TouchableOpacity
                  style={styles.unitSelector}
                  onPress={() => setOptionMenuOpen(!optionMenuOpen)}>
                  <Typography>{transformUnit(unit, +quantity.value)}</Typography>
                  <Ionicons name="chevron-down" size={18} color={COLORS.black} />
                </TouchableOpacity>
                {optionMenuOpen && (
                  <View style={styles.optionMenu}>
                    {selectedIngredient.units.map((unit) => (
                      <TouchableOpacity key={unit} onPress={() => handleSelectUnit(unit)}>
                        <Typography>{transformUnit(unit, +quantity.value)}</Typography>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() =>
                handleUpdate({
                  ...selectedIngredient,
                  quantity: Number(quantity.value.replace(',', '.')),
                  unit,
                })
              }>
              <Typography size={18} color="white">
                Guardar
              </Typography>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  )
}

export default EditIngredientModal
