import React, { useContext } from 'react'
import Logo from "../img/Logo.png"
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
  return (
    <div className='navbar'>
        <div className="container">

            <div className="logo">
                <Link to={'/'}>
                <img src={Logo} alt="Logo" />
                </Link>
                
            </div>

            <div className="links">
                <Link className='link' to="/">
                    <h6>Home</h6>
                </Link>

                <Link className='link' to="/login">
                    <h6>LogIn</h6>
                </Link>

                <Link className='link' to="/register">
                    <h6>SignUp</h6>
                </Link>

                <span>{currentUser?.username}</span>

                <span onClick={logout}>LogOut</span>

                <span className='write'>
                    <Link classname="link" to="/write">
                        <button>Write</button>
                    </Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar