import { useReducer, useState } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import { AuthForm } from 'src/components'
import { insertSession } from 'src/db'
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

        insertSession({
          email: result.email,
          localId: result.localId,
          token: result.idToken,
        })
          .then((result) => console.log(result))
          .catch((error) => console.log(error.message))
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
