import { createSlice } from '@reduxjs/toolkit'
import RECIPES from 'src/constants/data/recipes.json'
import { Recipe } from 'src/types'

const initialState: { data: Recipe[] } = { data: RECIPES }

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    createRecipe: (state, action) => {
      state.data.push(action.payload.recipe)
    },
    updateRecipe: (state, action) => {
      const updatedRecipe = action.payload.recipe
      state.data = state.data.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    },
  },
})

export const { createRecipe, updateRecipe } = recipesSlice.actions

export default recipesSlice.reducer
