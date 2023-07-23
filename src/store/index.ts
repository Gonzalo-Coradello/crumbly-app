import { configureStore } from '@reduxjs/toolkit'

import categoriesSlice from './categories/categories.slice'
import recipesSlice from './recipes/recipes.slice'
import usersSlice from './users/users.slice'

const store = configureStore({
  reducer: {
    recipes: recipesSlice,
    categories: categoriesSlice,
    users: usersSlice,
  },
})

export default store
