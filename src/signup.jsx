import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './signup.css'

function Signup() {
    const nav = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function handleSignup() {
        if (!name || !email || !password) {
            alert("Fill all the details")
            return
        }

        const formdata = {
            myname: name,
            myemail: email,
            mypassword: password,
        }

        const result = await fetch("https://68870d7a071f195ca97f0a8b.mockapi.io/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formdata)
        })

        if (result.ok) {
            alert("Account created successfully")
            nav("/login")
        } else {
            alert("Failed to create account")
            setName("")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <div className="signup-container">
            <h1>Create Account</h1>
            <label>Enter Username</label>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Enter username'
                type="text"
            />
            <label>Enter Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter email'
                type="email"
            />
            <label>Enter Password</label>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter password'
                type="password"
            />
            <button onClick={handleSignup}>Create Account</button>
        </div>
    )
}

export default Signup
