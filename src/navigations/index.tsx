import { NavigationContainer } from '@react-navigation/native'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loader, Typography } from 'src/components'
import { setUser } from 'src/store/auth/auth.slice'
import { useGetUserByIdQuery } from 'src/store/users/api'

import AuthStack from './auth'
import TabNavigator from './tabs'

export default function RootNavigator() {
  const user = useSelector(({ auth }) => auth.value.user)
  const dispatch = useDispatch()
  const { data, isError, isLoading } = useGetUserByIdQuery(user?.localId)

  useEffect(() => {
    if (data) {
      dispatch(setUser({ ...user, image: data.image }))
    }
  }, [data])

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <Typography>Ha ocurrido un problema</Typography>
  }

  return <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}</NavigationContainer>
}
