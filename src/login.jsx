import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()

    async function handleLogin() {
        const result = await fetch("https://68870d7a071f195ca97f0a8b.mockapi.io/users")
        const response = await result.json()
        const data = response.find(item => item.myemail === email && item.mypassword === password)

        if (data) {
            alert("Login successfully")
            nav("/home")
        } else {
            alert("Failed to login")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <label>Enter Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter email'
                type="text"
            />
            <label>Enter Password</label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'
                type="password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
