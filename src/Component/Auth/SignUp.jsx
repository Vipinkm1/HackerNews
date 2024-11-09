import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    const navigate = useNavigate()
    const [SignUpForm, setSignUpForm] = useState({
        username: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSignUpForm(SignUpForm)
        console.log('The form is submitted successfully', SignUpForm)
        alert('Successfully Register Your Account')
              localStorage.setItem('SignUpForm', JSON.stringify(SignUpForm))
        navigate('/login')
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignUpForm({
            ...SignUpForm,
            [name]: value
        })
    }
  return (
    <div className='border-1'>
    <div className='border-2'>
    <h1 className='h1'> SignUp </h1>
        <form onSubmit={handleSubmit} className='forn-container'>
            <div className='form-container-1'>
                <label>Username</label>
                <input className='input-width' name='username' value={SignUpForm.username} type='text' onChange={handleChange} placeholder='Enter your name' required />
            </div>
            <div className='form-container-1'>
                <label>Password</label>
                <input className='input-width' type='text' value={SignUpForm.password} name='password' onChange={handleChange} placeholder='Enter your password' required />
            </div>
            <div className='btn-1'>
                <button className='btn-width'>SignUp</button>
            </div>
        </form>
    </div>
</div>
  )
}

export default SignUp