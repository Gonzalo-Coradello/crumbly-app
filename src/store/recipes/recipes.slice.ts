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
  },
})

export const { createRecipe } = recipesSlice.actions

export default recipesSlice.reducer
