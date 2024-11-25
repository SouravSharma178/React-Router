import React from 'react'
import {Link,Outlet,useLocation} from 'react-router-dom'

const Contact = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <h1>This is the Contact Page</h1>
      <Link to="company" state={{name:"Souravs Company"}}>Go to Company</Link>
      <br/>
      <Link to="other">Go to Other Business Page</Link>
      {/*the parent component is where we place this outlet component outherwise our nested routing will not work */}
      <Outlet/>
    </div>
  )
}

export default Contact
