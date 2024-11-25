import React,{useState} from 'react';
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
    const [state,setState] = useState('');
    const [searchParams,setSearchParams] = useSearchParams();
    const age = searchParams.get('age')
    function handleChange(e){
        setState(e.target.value)
    }
    function handleSubmit(){
        console.log(state)
        // setSearchParams is used to set the query params and it expects an object
        setSearchParams({age:state})
        setState('');
    }
  return (
    <div>
     <h1>This is the filter Page</h1>
     <h1>Age:{age}</h1>
     <input type='text' placeholder='Enter the age' onChange={handleChange} value={state}></input>
     <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Filter
