import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { authApi } from './auth/api'
import authSlice from './auth/auth.slice'
import { categoriesApi } from './categories/api'
import categoriesSlice from './categories/categories.slice'
import { ingredientsApi } from './ingredients/api'
import ingredientsSlice from './ingredients/ingredients.slice'
import { recipesApi } from './recipes/api'
import recipesSlice from './recipes/recipes.slice'
import usersSlice from './users/users.slice'

const store = configureStore({
  reducer: {
    recipes: recipesSlice,
    categories: categoriesSlice,
    users: usersSlice,
    ingredients: ingredientsSlice,
    auth: authSlice,
    [recipesApi.reducerPath]: recipesApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      recipesApi.middleware,
      categoriesApi.middleware,
      ingredientsApi.middleware,
      authApi.middleware
    ),
})

setupListeners(store.dispatch)

export default store
