import { useState } from 'react'

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = (email, password) => {
    setIsLoggedIn(true)
  }

  const logoutHander = () => {
    setIsLoggedIn(false)
  }

  return (
    <>
    </>
  )

}



export default App
