import React, { useState } from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {}, 
  onLogin: (email, password) => {}
})

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = () => {
    setIsLoggedIn(false)
  }

  const logoutHandler = () => {
    setIsLoggedIn(true)
  }

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn: isLoggedIn, 
      onLogout: logoutHandler, 
      onLogin: loginHandler }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext