
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
  
    const {formState, onInputChange, onResetForm} = useForm({
        username: " ",
        email: " ",
        password: "",
      });
    
    
      const { username, email, password } = formState;
  
  return (
    <>
    <h1>Formulario con custom hook</h1>
    <hr></hr>

    <input type="text"
           className="form-control"
           placeholder="Nombre"
           name="username"
           value={ username }
           onChange={ onInputChange} >
    </input>
    
    <input type="email"
           className="form-control mt-2"
           placeholder="Jonh@gmail.com"
           name="email"
           value={ email }
           onChange={ onInputChange } >
    </input>

    <input type="pasword"
           className="form-control mt-2"
           placeholder="contraseña"
           name="password"
           value={ password }
           onChange={ onInputChange } >
    </input>

    <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>


  
    
    </>
  )
}