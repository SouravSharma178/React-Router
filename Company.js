import React from 'react'
import {useLocation} from 'react-router-dom'

const Company = () => {
  const location = useLocation();
  console.log("This is the Company Component",location.state)
  return (
    <div>
      <h1>This is the Company Page</h1>
    </div>
  )
}

export default Company
