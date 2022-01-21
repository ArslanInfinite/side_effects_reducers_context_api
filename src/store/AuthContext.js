import React, { useState } from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogOut: () => {}, 
  onLogin: (email, password) => {}
})

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', 'LOGGED_IN')
    setIsLoggedIn(false)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
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