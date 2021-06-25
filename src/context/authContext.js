import { createContext, useContext, useEffect, useState } from "react";
import { auth } from '../firebase'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState('')
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }
  const logout = () => {
    return auth.signOut()
  }

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetch(`https://pwr-retro-blog-server.herokuapp.com/user?email=${user.email}`)
          .then(res => res.json())
          .then(data => {
            if (data) setUser(data[0])
          })
      }
      setCurrentUser(user)
      setLoading(false)
    })
    return unSubscribe
  }, [])

  const value = { signup, login, logout, currentUser, user, setUser }
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export { AuthProvider }