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
        return(
            
            <div className="show-container">
                {result.image != null ? <img src={result.image.medium} alt={result.name} width="40%" height="auto"/> : <img src="https://images.pexels.com/photos/3962259/pexels-photo-3962259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="We are closed sign" width="200px" height="auto"/>}
                <h1>{result.name}</h1>
                <h4>Release date: {result.premiered}</h4>

                {result.genres.length > 0 && <h4>Genres:</h4>}
                {result.genres.map((genre) => <em key={genre}>{genre} </em>)}

                {result.rating.average != null && <h4>Rating: {result.rating?.average}/10</h4>}

                <h4>{parse(result.summary)}</h4>
                <h4>Starring:</h4>
                {result._embedded.cast.map((actor) => <p key={actor.person.id}><Link to={'/actor/' + actor.person.id}>{actor.person.name}</Link></p>)}
                <Link to={'/'}><i className="fa-solid fa-house"></i></Link>
            </div>
        )
    } else {
        return <h2>Loading...</h2>
    }
}