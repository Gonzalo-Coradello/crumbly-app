import { configureStore } from '@reduxjs/toolkit'

import categoriesSlice from './categories/categories.slice'
import recipesSlice from './recipes/recipes.slice'

const store = configureStore({
  reducer: {
    recipes: recipesSlice,
    categories: categoriesSlice,
  },
})

export default store
