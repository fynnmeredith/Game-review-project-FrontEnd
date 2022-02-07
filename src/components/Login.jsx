import { useState } from 'react'

const Login = () => {
    const [loggedIn, setLoggedIn] = useState([])

    return (
        <form className='login'>
            <label>Enter username:</label>
            <input className="loginInput" placeholder="username..."></input>
            <button className='loginButton'>Log in</button>
        </form>
    )
}

export default Login

