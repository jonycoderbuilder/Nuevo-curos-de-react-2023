import { useCounter } from "../hooks/useCounter";



export const CounterWithCustomHook = () => {
  
    const {counter, increment, decremet, reset} = useCounter();
  
    return (
   <>
    <h1>Counter with hook: {counter} </h1>
    <hr></hr>

    <button onClick={ increment } className="btn btn-primary" >+1</button>
    <button onClick={ reset } className="btn btn-primary">Reset</button>
    <button onClick={ decremet } className="btn btn-primary">-1</button>
   
   </>
  )
}


