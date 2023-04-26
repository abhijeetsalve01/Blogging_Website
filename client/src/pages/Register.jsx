import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [err, setError] = useState(null);
  const navigate = useNavigate();

const handleChange = e =>{
  setInputs(prev=>({...prev, [e.target.name]: e.target.value}))

}


const handleSubmit = async e => {
  e.preventDefault()
  try{
  await axios.post("/auth/register", inputs)
  navigate("/login");
  }catch(err){
    setError(err.response.data);
    }
};

  return (
    <div className='auth'>
        <h1>Create Account</h1>
        <form>
            <input required type='username'  placeholder='Username' name='username' onChange={handleChange}/>
            <input required type='email'  placeholder='Email address' name='email' onChange={handleChange}/>
            <input required type='password'  placeholder='Password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmit}>SignUp</button>
            {err && <p>{err}</p>}
            <span>Already have an account?<Link to={'/login'}>LogIn</Link></span>
        </form>
    </div>
  )
}

export default Register
