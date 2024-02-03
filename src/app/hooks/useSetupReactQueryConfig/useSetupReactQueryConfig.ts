import axios from 'axios'
import { useEffect } from 'react'

export const useSetupReactQueryConfig = () => {
  useEffect(() => {
    const token = import.meta.env.VITE_MOVIE_DB_TOKEN

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    return () => {
      delete axios.defaults.headers.common['Authorization']
    }
  }, [])
}
