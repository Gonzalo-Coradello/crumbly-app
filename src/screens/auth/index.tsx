import { useReducer, useState } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { AuthForm } from 'src/components'
import { useLoginMutation, useSignUpMutation } from 'src/store/auth/api'
import { setUserSession } from 'src/store/auth/auth.slice'
import { useCreateUserMutation } from 'src/store/users/api'
import { UPDATE_FORM, onInputChange } from 'src/utils/validations'

const initialLoginState = {
  name: { value: '', error: '', touched: false, hasError: false },
  email: { value: '', error: '', touched: false, hasError: true },
  password: { value: '', error: '', touched: false, hasError: true },
  isFormValid: false,
}

const initialSignUpState = {
  name: { value: '', error: '', touched: false, hasError: true },
  email: { value: '', error: '', touched: false, hasError: true },
  password: { value: '', error: '', touched: false, hasError: true },
  isFormValid: false,
}

export type StateType = {
  name?: { value: string; error: string; touched: boolean; hasError: boolean }
  email: { value: string; error: string; touched: boolean; hasError: boolean }
  password: { value: string; error: string; touched: boolean; hasError: boolean }
  isFormValid: boolean
}

type ActionType = {
  type: string
  data: {
    name: 'name' | 'email' | 'password'
    value: string
    hasError: boolean
    error: string
    touched: boolean
    isFormValid: boolean
  }
}

const formReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case UPDATE_FORM:
      // eslint-disable-next-line no-case-declarations
      const { name, value, hasError, error, touched, isFormValid } = action.data
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      }
    default:
      return state
  }
}

const Auth = () => {
  const dispatch = useDispatch()
  const [isLogin, setIsLogin] = useState(true)
  const [formState, dispatchFormState] = useReducer(formReducer, initialLoginState)
  const [signUp] = useSignUpMutation()
  const [login] = useLoginMutation()
  const [createUser] = useCreateUserMutation()
  const [authError, setAuthError] = useState('')

  const handleSubmit = async () => {
    try {
      if (!formState.isFormValid) return
      if (isLogin) {
        const result = await login({
          email: formState.email.value,
          password: formState.password.value,
        }).unwrap()
        dispatch(setUserSession(result))
      } else {
        const result = await signUp({
          email: formState.email.value,
          password: formState.password.value,
        }).unwrap()
        const { email, idToken, localId } = result
        const newUser = {
          name: formState.name?.value,
          email,
          idToken,
          localId,
        }
        dispatch(setUserSession(newUser))
        await createUser(newUser)
      }

      /* registerData = {
      "email": "test@test.com",
      "expiresIn": "3600",
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjYyM2YzNmM4MTZlZTNkZWQ2YzU0NTkyZTM4ZGFlZjcyZjE1YTBmMTMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY3J1bWJseS1hcHAiLCJhdWQiOiJjcnVtYmx5LWFwcCIsImF1dGhfdGltZSI6MTY5MTI3NTcyMiwidXNlcl9pZCI6IlV5TE5DRlhBVjFhVk9DWXAxYm4yUXdRRWVkYzIiLCJzdWIiOiJVeUxOQ0ZYQVYxYVZPQ1lwMWJuMlF3UUVlZGMyIiwiaWF0IjoxNjkxMjc1NzIyLCJleHAiOjE2OTEyNzkzMjIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0QHRlc3QuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.eF4_eLjiFvd_k4wGw8gb6Z_m9QW8lKJAuM5-z9ClIbVZ3HFTaWC433j5VoWEM5OUoqSWiFh2NpFHNMfZOljjzx29NH9NJYtHyf66y5w5x12LtuylZmn9QNiC9HEZzKKUj7esPWYLNyl9FBlQVRx49ycFoIX6hhUzDVzHJc_4M32w5JPCHIrl0VoZNUNYHc9aRu7cYB_gP8nTIXCe_tXnHXQF2p0amci1fMKcDZ2MYCFgjBrewE1IpPr1kEhDlwm4H782KkXo1KGqfOd9K3vUjXCC5_Eg_2NH29r3XE7oD0OPe8jReRs2MFaO0NcfBTr4av-eYToRK4SKa2ikZVqR0A",
      "kind": "identitytoolkit#SignupNewUserResponse",
      "localId": "UyLNCFXAV1aVOCYp1bn2QwQEedc2",
      "refreshToken": "AMf-vBznMqhsn7dgfl1TyPOlwJwy1NvxrMNRg4meyhw3TYfsP_G6yemPgiERRtVzhM8ay8NVBzBYnOlNJmOfkNTCi4j5LlzAAROyEdWbz4sASKnwt20TYu5CDohHgle2DG42vCFcJGEwYyB6YJD6MBXj5al_2DHTNGaDAWhCRBqNcwrF-ZQ_wdBuERZb2u1HOiG4xHx2OSa-"}

      */
      /* loginData: {
      "displayName": "",
      "email": "gonzalo@gmail.com",
      "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6InRCME0yQSJ9.eyJpc3MiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGUuY29tLyIsImF1ZCI6ImNydW1ibHktYXBwIiwiaWF0IjoxNjkxMjc1MzQ3LCJleHAiOjE2OTI0ODQ5NDcsInVzZXJfaWQiOiJmODZ3d2ZYeDBPUkJBRjVKd1VDMDUzNVBYMW4xIiwiZW1haWwiOiJnb256YWxvQGdtYWlsLmNvbSIsInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCIsInZlcmlmaWVkIjpmYWxzZX0.L2XZhpfcAncsFDWBLdQgC0dmY2eF8wkvZmtSuMaBZd3GZmK0vqUP4LT7P4R8wYjhOHc-YHa2BRQ6m0Oi1DYGT4Q3o6ob9maR-nPBf2AHnpXOqrpYPQibzkw59se3uohNBX6AXC6VU4G6UED1JvX9YEX5DupZiflMnvtuXgFsvmxt2NDwnHxRIDXT5et5sYxCJpbB2AUYPGnM67jBDbgMfIJHxnNCCUvIwuM05ke9eLYpiCwUrNKxAMqhRG5rNNMSh8F_j-Tv-9VxU55OfPXQuIhWa2PvLAP1u_kJrw_VDdL-9HASUNf6obNLYHAjDIea2hc3U5zgb6YlEuBqn4_uNg", 
      "kind": "identitytoolkit#VerifyPasswordResponse",
      "localId": "f86wwfXx0ORBAF5JwUC0535PX1n1",
      "registered": true}
    
      */
    } catch (err: any) {
      setAuthError(err?.data?.error?.message)
    }
  }

  const handleInputChange = ({ name, value }: { name: string; value: string }) => {
    setAuthError('')
    onInputChange({ name, value, dispatch: dispatchFormState, formState })
  }

  const handleFormChange = () => {
    if (!isLogin) {
      setIsLogin(true)
      dispatchFormState({
        type: UPDATE_FORM,
        data: { ...initialLoginState.name, name: 'name', isFormValid: false },
      })
      dispatchFormState({
        type: UPDATE_FORM,
        data: { ...initialLoginState.email, name: 'email', isFormValid: false },
      })
      dispatchFormState({
        type: UPDATE_FORM,
        data: { ...initialLoginState.password, name: 'password', isFormValid: false },
      })
    } else {
      setIsLogin(false)
      dispatchFormState({
        type: UPDATE_FORM,
        data: { ...initialSignUpState.name, name: 'name', isFormValid: false },
      })
      dispatchFormState({
        type: UPDATE_FORM,
        data: { ...initialSignUpState.email, name: 'email', isFormValid: false },
      })
      dispatchFormState({
        type: UPDATE_FORM,
        data: { ...initialSignUpState.password, name: 'password', isFormValid: false },
      })
    }
    setAuthError('')
  }

  return (
    <View style={{ flex: 1 }}>
      <AuthForm
        formState={formState}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        authError={authError}
        handleFormChange={handleFormChange}
      />
    </View>
  )
}

export default Auth
