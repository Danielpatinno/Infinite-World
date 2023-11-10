import { useState, useEffect } from "react"
import {useSelector} from "react-redux"

export const useAuth = () => {
  const { manager } = useSelector((state) => state.auth)

  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(manager) {
        setAuth(true)
    } else {
        setAuth(false)
    }

    setLoading(false)
  }, [manager]);

  return {auth, loading}
}