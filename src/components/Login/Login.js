import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Login.css'
const Login = () => {
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const signInHandler = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword;
        
        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            form.reset()
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className='form-container'>
            <form onSubmit={signInHandler} className='form'>
                <h2>Login</h2>
                <div className='login-form form-control'>
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" name='email' placeholder='Type your email' required/>   
                </div>
               
                <div className='login-form form-control'>
                    <label htmlFor="password" className="form-label">password</label>
                    <input type="password" name='password' placeholder='Type your password' required/>   
                </div>
                <button className='login-btn'>Login</button>
            </form>
            <p>amazon new user <Link to='/signUp'>Create an new Account</Link></p>
        </div>
    );
};

export default Login;