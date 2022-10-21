import { useState } from 'react'

export default function useDebounce () {
  const [debounceHandler, setDebounceHandler] = useState(null)

  const debounceFunc = (func, delay) => {
    if (debounceHandler) clearTimeout(debounceHandler)
    const timeout = setTimeout(func, delay)
    setDebounceHandler(Number(timeout))
  }

  return debounceFunc
}
