import { useState } from "react";
import { useCounter } from "../hooks/useCounter"

const HeavyStuff = ( iterationNumber = 100 ) => {
    for (let i= 0 ; i < iterationNumber; i++ ) {
        console.log("Ahí vamos...");
    }
    return `${iterationNumber } iteraciones realizadas`;
}



export const MemoHook = () => {
  
    const{ counter, increment } = useCounter(10);
    const [ show, setShow ] = useState(true)
  
  
    return (
    <>
      <h1>Counter: <small> { counter } </small> </h1>
      <hr></hr>

      <h4> { HeavyStuff } </h4>

      <button onClick={ ()=>increment () } className="btn btn-primary" >+1</button>

      <button onClick={ () => setShow(!show) } className="btn btn-outline-primary"  >Show/Hide{ JSON.stringify(show)} </button>




    </>
  )
}