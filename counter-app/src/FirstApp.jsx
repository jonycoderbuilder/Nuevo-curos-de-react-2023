const newMessage = "jOHN";
const arr = {
        nombre:"hi",
        apellido:"hola"
    };
 const func1 = () => {
    return "Hola, que tal";
 }   

export const HelloWorldApp1 = () => {
    
    
    
    
    return (
      <>
      <h1>{newMessage}</h1>
      <p>{JSON.stringify(arr) } </p>
      <p>{func1()} </p>
      <p>Soy un subtitulo</p>
      </>
      
    );
  }
  