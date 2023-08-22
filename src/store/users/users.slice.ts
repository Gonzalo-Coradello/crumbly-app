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
    setUserData: (state, action) => {
      state.current = action.payload
    },
    addToList: (state, action) => {
      const { id, listName } = action.payload
      const list =
        listName === 'favorites'
          ? state.current?.favorites
          : state.current?.lists.find((l) => l.name === listName)?.recipes
      if (list === undefined) {
        return console.warn('No se pudo encontrar la lista')
      }
      list.push(id)
    },
    removeFromList: (state, action) => {
      const { id, listName } = action.payload
      const list =
        listName === 'favorites'
          ? state.current?.favorites
          : state.current?.lists.find((l) => l.name === listName)?.recipes
      if (list === undefined) {
        return console.warn('No se pudo encontrar la lista')
      }
      const index = list.indexOf(id)
      list.splice(index, 1)
    },
    createList: (state, action) => {
      const listName = action.payload.listName
      const recipeId: string | undefined = action.payload.recipeId

      const newList: { name: string; recipes: string[] } = {
        name: listName,
        recipes: [],
      }
      if (recipeId) {
        newList.recipes.push(recipeId)
      }
      state.current?.lists.push(newList)
    },
    addRecipe: (state, action) => {
      const recipeId = action.payload.id
      state.current?.recipes.push(recipeId)
    },
  },
})

export const { setUserData, addToList, removeFromList, createList, addRecipe } = usersSlice.actions

export default usersSlice.reducer
