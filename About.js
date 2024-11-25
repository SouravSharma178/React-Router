import React from 'react'
import Persons from './Persons'
import {Link} from 'react-router-dom'

const About = () => {
  const url = "/about/"
  return (
    <div>
    <h1>This is the About Page</h1>
    <ul>
    {Persons.map(i=><Link to={url+i.id} key={Math.random()}><li>{i.firstName}</li></Link>)}
    </ul>
    </div>
  )
}

export default About
