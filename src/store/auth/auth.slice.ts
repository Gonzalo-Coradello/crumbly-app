import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: { user: null, idToken: null, localId: null, image: null } }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = {
        user: action.payload.email,
        idToken: action.payload.idToken,
        localId: action.payload.localId,
        image: null,
      }
    },
    clearUser: (state) => {
      state.value = {
        user: null,
        idToken: null,
        localId: null,
        image: null,
      }
    },
    setCameraImage: (state, action) => {
      state.value = {
        ...state.value,
        image: action.payload,
      }
    },
  },
})

export const { setUser, clearUser, setCameraImage } = authSlice.actions

export default authSlice.reducer
