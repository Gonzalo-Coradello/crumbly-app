import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader, Typography } from 'src/components'
import { fetchSession } from 'src/db'
import { setUserSession } from 'src/store/auth/auth.slice'
import { useGetUserByIdQuery } from 'src/store/users/api'
import { setUserData } from 'src/store/users/users.slice'

import AuthStack from './auth'
import TabNavigator from './tabs'

export default function RootNavigator() {
  const { localId } = useSelector(({ auth }) => auth.value)
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetUserByIdQuery(localId)

  useEffect(() => {
    ;(async () => {
      try {
        const session: any = await fetchSession()
        if (session?.rows.length) {
          const user = session.rows._array[0]
          dispatch(setUserSession(user))
        }
      } catch (error: any) {
        console.log(error.message)
      }
    })()
  }, [])

  useEffect(() => {
    if (data) {
      dispatch(setUserSession(data))
      dispatch(setUserData(data))
    }
  }, [data])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Typography>Ha ocurrido un problema</Typography>
  }

  return <NavigationContainer>{localId ? <TabNavigator /> : <AuthStack />}</NavigationContainer>
}
