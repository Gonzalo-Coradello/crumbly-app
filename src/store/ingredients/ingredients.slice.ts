import { createSlice } from '@reduxjs/toolkit'
import INGREDIENTS from 'src/constants/data/ingredients.json'
import { Ingredient } from 'src/types'

const initialState: { data: Ingredient[] } = { data: INGREDIENTS }

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
})

export default ingredientsSlice.reducer
