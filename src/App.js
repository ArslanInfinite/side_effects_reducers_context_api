import { useState } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'
import AuthContext from './store/AuthContext'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (email, password) => {
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler
    }}>
     <MainHeader />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  )

}

export default App