import { useState } from 'react'

export const useInput = () => {
  const [value, setValue] = useState<string>('')

  const onChangeText = (text: string) => {
    setValue(text)
  }

  const reset = () => {
    setValue('')
  }

  return {
    value,
    onChangeText,
    reset,
    setValue,
  }
}
