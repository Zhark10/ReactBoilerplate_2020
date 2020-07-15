import React, { createContext, FC } from 'react'
import { auth } from './firebase-initialize'

const Context = createContext({ user: null })

const Provider: FC = ({ children }) => {
  const [user, setUser] = React.useState<any>(null)

  React.useEffect = () => {
    auth.onAuthStateChanged((user) => {
      setUser(user)
    })
  }

  return <Context.Provider value={user}>{children}</Context.Provider>
}

export const AuthFirebase = {
  Provider,
  Context,
}
