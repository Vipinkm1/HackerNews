import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoginForm(loginForm)
        console.log('The form is submitted successfully', loginForm)
        alert('Successfully Login Your Account')
        navigate('/dashboard')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        })
        
       
    }
    return (
        <div className='border-1'>
            <div className='border-2'>
            <h1 className='h1'> Login </h1>
                <form onSubmit={handleSubmit} className='forn-container'>
                    <div className='form-container-1'>
                        <label>Username</label>
                        <input className='input-width' name='username' value={loginForm.username} type='text' onChange={handleChange} placeholder='Enter your name' required />
                    </div>
                    <div className='form-container-1'>
                        <label>Password</label>
                        <input className='input-width' type='text' value={loginForm.password} name='password' onChange={handleChange} placeholder='Enter your password' required/>
                    </div>
                    <div className='btn-1'>
                        <button className='btn-width'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Login