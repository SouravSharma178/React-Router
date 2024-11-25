import React from 'react'
import { useParams } from 'react-router-dom'
import Persons from './Persons';

const DetailsPage = () => {
    const {id} = useParams();
    let arr = Persons.find(i=>i.id==id)
    return (
    <div>
    <h1>{arr.id}{arr.firstName}{arr.lastName}</h1>
    </div>
  )
}

export default DetailsPage
