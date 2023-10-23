
import { useState } from 'react';
import PropTypes from "prop-types";


export const CounterApp = ({value} ) => {
  
  const [ counter, setCounter ] = useState(value);
  const handleAdd = () => {
    
    setCounter( counter + 1);
  }

  const handDos = () => {
    
    setCounter( counter -1);
  }

  const handReset = () => {
    
    setCounter(value);
  }

    
 
  return (
    <>
    <h1>CounterApp</h1>
    <h2>{ counter } </h2>

    <button onClick={  handleAdd } >
        +1
    </button>
    <button onClick={handDos}>-1</button>
    <button onClick={handReset} >Reset</button>
    
    </>
  )
}



CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


