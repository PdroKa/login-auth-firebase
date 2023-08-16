import { createContext, useContext, useEffect, useState } from 'react'
import { authFirebase } from '../Firebase'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(authFirebase, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(authFirebase, email, password)
  }

  const logOut = () => {
    return signOut(authFirebase)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirebase, (user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signUp,
        signIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
