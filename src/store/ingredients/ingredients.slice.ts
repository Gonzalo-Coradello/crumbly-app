import { createSlice } from '@reduxjs/toolkit'
import INGREDIENTS from 'src/constants/data/ingredients.json'
import { Ingredient } from 'src/types'

const initialState: { data: Ingredient[]; selected: Ingredient[]; allUnits: string[] } = {
  data: INGREDIENTS,
  selected: [],
  allUnits: [
    'unidad',
    'gramo',
    'cucharada',
    'cucharadita',
    'taza',
    'pizca',
    'mililitro',
    'litro',
    'puñado',
  ],
}

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient: (state, action) => {
      const ingredient: Ingredient = action.payload
      state.selected.push(ingredient)
      const exists = state.data.find((i) => i.ingredient === ingredient.ingredient)
      if (!exists) {
        state.data.push(ingredient)
      }
    },
    setIngredients: (state, action) => {
      state.selected = action.payload
    },
    editIngredient: (state, action) => {
      const updatedIngredient: Ingredient = action.payload.ingredient
      state.selected = state.selected.map((i) =>
        i.ingredient.toLowerCase() === updatedIngredient.ingredient.toLowerCase()
          ? updatedIngredient
          : i
      )
    },
    deleteIngredient: (state, action) => {
      const ingredientName: string = action.payload.ingredient
      state.selected = state.selected.filter((i) => i.ingredient !== ingredientName)
    },
    emptyIngredients: (state) => {
      state.selected = []
    },
  },
})

export const { addIngredient, setIngredients, editIngredient, deleteIngredient, emptyIngredients } =
  ingredientsSlice.actions

export default ingredientsSlice.reducer
