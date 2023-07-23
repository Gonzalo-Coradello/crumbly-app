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
  reducers: {},
})

export default usersSlice.reducer
