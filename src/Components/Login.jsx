import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    const handelSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
        // prevent the page from refreshing
    }

  return (
    <div>
        <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username' 
        />
        {" "}
        <input type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
        />
        <button onClick={handelSubmit}>Submit</button>
    </div>
  )
}

export default Login