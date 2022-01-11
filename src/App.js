import { useState, useEffect } from 'react'

import Login from './components/Login/Login'
import Home from './components/Home/Home'
import MainHeader from './components/MainHeader/MainHeader'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getitem('LOGGED_IN')
    
    if (storedUserLoggedInInformation === 'LOGGED_IN'){
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', 'LOGGED_IN')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
     <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </>
  )

}

export default App