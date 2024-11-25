import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  function handleClick(){
    localStorage.setItem('login',true)
    navigate('/')
  }

  useEffect(()=>{
   let flag =  localStorage.getItem('login')
    if(flag){
      navigate('/')
    }
  },)

  return (
    <div>
      <h1>This is the login page</h1>
      <input type="text"/>
      <br/>
      <input type="text"/>
      <br/>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Login
