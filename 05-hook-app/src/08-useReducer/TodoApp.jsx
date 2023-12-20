import { useReducer } from "react";


const inistialState = [
    {
        id: new Date().getTime(),
        description: "Recolectar la piedra del alma",
        done: false, 
    },
    {
        id: new Date().getTime() * 3,
        description: "Recolectar la piedra del alma",
        done: false, 
   },
]


export const TodoApp = () => {

   const [todos, dispatch] = useReducer( todoReducer, inistialState);



  return (
    <>
      <h1>TodoApp</h1>
      <hr></hr>
    <div  className="row">
      <div className="col-7">
        <ul>
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </div>

      <div className="col-5">
        <h4>Agregar TODO</h4>
        <hr></hr>
        <form>
            <input type="text" 
            placeholder="¿Qué hay que hacer?"
            className="form-control" ></input>
            <button
            type="submit"
            className="btn btn-outline-primary mt-1">Agregar</button>
        </form>
      </div>
      
    </div>
      
    </>
  )
}


