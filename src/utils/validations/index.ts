const formatEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const UPDATE_FORM = 'UPDATE_FORM'

const validateInput = ({ name, value }: { name: string; value: string }) => {
  let error = ''
  let hasError = false
  const formatValue = value.trim()
  switch (name) {
    case 'name':
      if (formatValue === '') {
        hasError = true
        error = 'El nombre es requerido'
      } else if (formatValue.length < 4) {
        hasError = true
        error = 'El nombre debe tener al menos 4 caracteres'
      } else {
        hasError = false
        error = ''
      }
      break
    case 'email':
      if (formatValue === '') {
        hasError = true
        error = 'El email es requerido'
      } else if (!formatEmail.test(formatValue)) {
        hasError = true
        error = 'El email es inválido'
      } else {
        hasError = false
        error = ''
      }
      break
    case 'password':
      if (formatValue === '') {
        hasError = true
        error = 'La contraseña es requerida'
      } else if (formatValue.length < 6) {
        hasError = true
        error = 'La contraseña debe tener al menos 6 caracteres'
      } else {
        hasError = false
        error = ''
      }
      break
    default:
      break
  }

  return { error, hasError }
}

type onInputChangeProps = {
  name: string
  value: string
  dispatch: any
  formState: any
}

export const onInputChange = ({ name, value, dispatch, formState }: onInputChangeProps) => {
  const { error, hasError } = validateInput({ name, value })
  let isFormValid = true
  for (const key in formState) {
    const item = formState[key]
    if (key !== name && hasError) {
      isFormValid = false
      break
    } else if (key !== name && item.hasError) {
      isFormValid = false
      break
    }
  }

  dispatch({
    type: UPDATE_FORM,
    data: {
      name,
      value,
      hasError,
      error,
      touched: true,
      isFormValid,
    },
  })
}
