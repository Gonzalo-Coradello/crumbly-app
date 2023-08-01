import { useEffect, useState } from 'react'

export const useInput = (defaultValue?: string) => {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue)
    }
  }, [defaultValue])

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
  }
}
