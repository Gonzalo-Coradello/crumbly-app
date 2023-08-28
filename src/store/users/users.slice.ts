import { createSlice } from '@reduxjs/toolkit'
import { User } from 'src/types'

const initialState: { current: User | null } = {
  current: null,
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

      if (listName === 'favorites') {
        if (state.current?.favorites) {
          state.current.favorites.push(id)
        } else if (state.current) {
          state.current.favorites = [id]
        }
      } else {
        const list = state.current?.lists?.find((l) => l.name === listName)

        if (list === undefined) {
          return console.warn('No se pudo encontrar la lista')
        } else if (list?.recipes) {
          list.recipes.push(id)
        } else {
          list.recipes = [id]
        }
      }
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
    removeList: (state, action) => {
      const listName = action.payload

      if (!state.current?.lists) return
      state.current.lists = state.current?.lists.filter((list) => list.name !== listName)
    },
    addRecipe: (state, action) => {
      const recipeId = action.payload.id
      state.current?.recipes.push(recipeId)
    },
    removeRecipe: (state, action) => {
      const recipeId = action.payload
      if (!state.current) {
        return
      }
      state.current.recipes = state.current.recipes.filter((recipe) => recipe !== recipeId)
    },
  },
})

export const {
  setUserData,
  addToList,
  removeFromList,
  createList,
  removeList,
  addRecipe,
  removeRecipe,
} = usersSlice.actions

export default usersSlice.reducer
