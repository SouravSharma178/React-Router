import React from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import '../App.css';

const Navbar = () => {
     const navigate  = useNavigate();
     function handleNavigation(param){
      navigate(param)
     }
  return (
    <div>
      <NavLink className="nav-bar" to="/about">About</NavLink>
     <br />
     <NavLink  className="nav-bar" to="/">Home</NavLink>
     <br />
     <NavLink className="nav-bar" to="/contact">Contact</NavLink>
     <br />
     <NavLink className="nav-bar" to="/filter">Filter</NavLink>
     <br />
     <button onClick={()=>handleNavigation("/about")}>Go to About Page</button>
     <br />
     <button onClick={()=>handleNavigation("/filter")}>Go to Filter Page</button>
    </div>
  )
}

export default Navbar
