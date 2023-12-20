
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const Layout = () => {
    const { counter, increment } = useCounter(5);
    const {data, isLoading,hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
    const { quote, author } = !!data && data[0];
    
    return (
    <>

    <h1>Breaking Bad Quotes</h1>
      <hr></hr>

      {
        isLoading
        ? (
          <div className="alert alert-info text-center" >
              loading...
           </div>
        )
        : (
          <blockquote style={{display: "flex"}} className="blockquote text-end" >
          <p className="mb-1">{ quote}</p>
          <footer className="blockquote-footer">{ author}</footer>
        </blockquote>
        )
      }


      <button onClick={()=> increment () } className="btn btn-primary">Next quote</button>

   

   

    </>
  )
}


