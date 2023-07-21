import { createSlice } from '@reduxjs/toolkit'
import CATEGORIES from 'src/constants/data/categories.json'
import { Category } from 'src/types'

const initialState: { data: Category[] } = { data: CATEGORIES }

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
})

export default categoriesSlice.reducer
