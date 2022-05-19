import {
  useState,
  useCallback
} from "react";

const useChange = (url, reqInit) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const change = useCallback(async function (dat, options) {
    try {
      const response = await fetch(url, {
        ...reqInit,
        body: dat,
        
      })
      const data = await response.json()
      setData(data)
      setIsLoading(false)
      options.onSuccess(data)
    } catch (e) {
      setError(e)
      setIsError(true)
      options.onError(e)
    }
  }, [])

  return {
    change,
    data,
    error,
    isLoading,
    isError
  }
}

export {
  useChange
}