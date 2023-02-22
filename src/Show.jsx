import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import parse from 'html-react-parser';

export function Show()
{
    const params = useParams();
    const [result, setResult] = useState(null);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${params.id}?embed=cast`)
        .then((response) => response.json())
        .then((data) => setResult(data))
        }, [result]); 
   
    
 if (result)
 {
    {console.log(result._embedded.cast)}
        return(
            
            <div className="show-container">
                {result.image != null ? <img src={result.image.medium} alt={result.name} width="30%" height="auto"/> : <img src="https://images.pexels.com/photos/3962259/pexels-photo-3962259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="we are closed sign" width="200px" height="auto"/>}
                <h1>{result.name}</h1>
                <p>Release date: {result.premiered}</p>
                <p>Rating: {result.rating?.average}/10</p>
                {/* <p>{parse(result.summary)}</p> */}
                <p>Cast:</p>
                {result._embedded.cast.map((actor) => <p><Link to={'/actor/' + actor.person.id}>{actor.person.name}</Link></p>)}
            </div>
        )
    } else {
        return <p>Loading...</p>
    }
}