import { createSlice } from '@reduxjs/toolkit'
import INGREDIENTS from 'src/constants/data/ingredients.json'
import { Ingredient } from 'src/types'

const initialState: { data: Ingredient[]; selected: Ingredient[] } = {
  data: INGREDIENTS,
  selected: [],
}

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredients: (state, action) => {
      const ingredients: Ingredient[] = action.payload
      state.selected.push(...ingredients)
    },
    editIngredient: (state, action) => {
      const updatedIngredient: Ingredient = action.payload.ingredient
      state.selected = state.selected.map((i) =>
        i.ingredient === updatedIngredient.ingredient ? updatedIngredient : i
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

export const { addIngredients, editIngredient, deleteIngredient, emptyIngredients } =
  ingredientsSlice.actions

export default ingredientsSlice.reducer
