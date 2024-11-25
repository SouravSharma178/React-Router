import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'

const Protected = ({Component}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('login') != true){
      navigate('/login')
    }
  },)
  return (
    <div>
      <h1>This is the protected component</h1>
      <Component/>
    </div>
  )
}

export default Protected
