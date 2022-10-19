
import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css';
const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="./about">About</Link>
                <Link to="./inventory">Inventory</Link>
                <Link to="./order">Order</Link>
                <Link to="./contact">Contact</Link>

                {
                    user?.uid ? <button onClick={logOut}>Log Out</button> :
                    <>
                        <Link to="./login">Login</Link>
                        <Link to="./signUp">SignUp</Link>
                    </>
                }
             
            </div>
          
        </div>
    );
};

export default Header;