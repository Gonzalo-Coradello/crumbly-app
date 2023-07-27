import { createSlice } from '@reduxjs/toolkit'
import USERS from 'src/constants/data/users.json'
import { User } from 'src/types'

const loggedUserId = '1'
const initialState: { current: User | undefined; userList: User[] } = {
  current: USERS.find((u) => u.id === loggedUserId),
  userList: USERS,
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const recipeId = action.payload
      state.current?.favorites.push(recipeId)
    },
    removeFromFavorites: (state, action) => {
      const recipeId = action.payload
      const index = state.current?.favorites.indexOf(recipeId)
      if (!index) {
        console.warn('Recipe not found in your list')
        return
      }
      state.current?.favorites.splice(index, 1)
    },
  },
})

export const { addToFavorites, removeFromFavorites } = usersSlice.actions

export default usersSlice.reducer
