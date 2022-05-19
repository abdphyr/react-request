import {
  useState,
  useCallback,
  useEffect
} from "react";

const useGet = (url, headers) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const request = useCallback(async () => {
    try {
      const response = await fetch(url, {
        headers: headers
      })
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    } catch (e) {
      setError(e)
      setIsError(true)
    }
  }, [])
  useEffect(() => {
    request()
  }, [])
  return {
    data,
    error,
    isLoading,
    isError
  }
}

export { useGet }