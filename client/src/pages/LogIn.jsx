import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/authContext.js'


const SignUp = () => {

  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })
  const [err, setError] = useState(null);
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

const handleChange = e =>{
  setInputs(prev=>({...prev, [e.target.name]: e.target.value}))

}


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await login(inputs)
    navigate("/");
  } catch (err) {
    setError(err.response.data);
  }
};

  return (
    <div className='auth'>
        <h1>Login</h1>
        <form>
            <input required type='username'  placeholder='Username' name='username' onChange={handleChange} />
            <input required type='password'  placeholder='Password' name='password' onChange={handleChange} />
            <button onClick={handleSubmit}>Login</button>
            {err && <p>{err}</p>}
            <span>Don't have an account yet?<Link to={'/register'}>SignUp</Link></span>
        </form>
    </div>
  )
}

export default SignUp
