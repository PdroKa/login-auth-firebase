import { createContext, useContext, useEffect, useState } from 'react'
import { authFirebase } from '../Firebase'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  sendPasswordResetEmail,
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

  const resetPassword = (email) => {
    return sendPasswordResetEmail(authFirebase, email)
  }

  const logOut = () => {
    return signOut(authFirebase)
  }

  const updateEmailAdress = (newEmail) => {
    return updateEmail(currentUser, newEmail)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authFirebase, (user) => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [currentUser])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signUp,
        signIn,
        logOut,
        updateEmailAdress,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
