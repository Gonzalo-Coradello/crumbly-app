import { createSlice } from '@reduxjs/toolkit'
import RECIPES from 'src/constants/data/recipes.json'
import { Recipe } from 'src/types'

const initialState: { data: Recipe[] } = { data: RECIPES }

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
})

export default recipesSlice.reducer
