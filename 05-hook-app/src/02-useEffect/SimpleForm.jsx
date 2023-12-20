import { useEffect, useState } from "react";
import { Message } from "./Message";



export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({
    username: "strider",
    email: "fernando@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ( { target } ) => {
      const { name, value } = target;
      setFormState({
        ...formState,
        [ name ]: value
      });
  }


  useEffect(() => {
    //console.log("c");
  }, []);

  useEffect(() => {
    //console.log("c");
  }, [formState]);

  useEffect(() => {
    //console.log("c");
  }, [email]);
  
  
    return (
    <>
    <h1>Formulario Simple</h1>
    <hr></hr>

    <input type="text"
           className="form-control"
           placeholder="Username"
           name="username"
           value={ username }
           onChange={ onInputChange} >
    </input>
    
    <input type="text"
           className="form-control mt-2"
           placeholder="Email"
           name="email"
           value={ email }
           onChange={ onInputChange } >
    </input>


    <Message></Message>
    
    </>
  )
}