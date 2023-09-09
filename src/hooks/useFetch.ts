import { useState, useEffect } from "react"
import { api } from "../services/api";

export const useFetch = <T> (path: string) => {
  const [data, setData] = useState<T | undefined>(undefined);

  useEffect(() => {
    const fetcher = async () => {
      try {
        const res = await api.get(path)
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetcher()
  }, [])

  return { data }
}