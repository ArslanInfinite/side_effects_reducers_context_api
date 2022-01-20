import React from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false, 
  onLogOut: () => {}
})

const AuthContextProvider = props => {
  return (
    <AuthContext.Provider>
      {props.children}
    </AuthContext.Provider>
    )
}

export default AuthContext