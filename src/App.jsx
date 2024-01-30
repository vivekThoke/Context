import { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import UserContextProvider from './context/ContextProvider'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Login/SignUp using the context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
