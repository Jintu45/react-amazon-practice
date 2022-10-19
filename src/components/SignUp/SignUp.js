import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './SignUp.css'


const SignUp = () => {
    const [error, setError] = useState(null)
    const {createUser} = useContext(AuthContext)

    const handleSubmit= event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        
        if(password.length < 6){
            setError('password must should be 6 characters')
            return;
        }
        if(password !== confirmPassword){
            setError('your password did not match')
            return;
        }
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className='form'>
                <h2>Register</h2>
                <div className='login-form form-control'>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' placeholder='Type your email' required/>   
                </div>
               
                <div className='login-form form-control'>
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" name='password' placeholder='Type your password' required/>   
                </div>
                <div className='login-form form-control'>
                    <label htmlFor="password" className="form-label">Confirm Password</label>
                    <input type="password" name='confirmPassword' placeholder='Type your password' required/>   
                </div>
                <button className='login-btn'>Register</button>
            </form>
            <p>amazon new user <Link to='/signUp'>Create an new Account</Link></p>
            <p className='error-text'>{error}</p>
        </div>
    );
};

export default SignUp;