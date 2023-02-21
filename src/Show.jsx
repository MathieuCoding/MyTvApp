import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function Show()
{
    const params = useParams();
    const [result, setResult] = useState([]);
    console.log(result);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${params.id}?embed=cast`)
        .then((response) => response.json())
        .then((data) => setResult(data));
    },
    []) 

    return(
        <div className="show-container">
            {result.image != null ? <img src={result.image.medium} alt={result.name} width="30%" height="auto"/> : <img src="https://images.pexels.com/photos/3962259/pexels-photo-3962259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="we are closed sign" width="200px" height="auto"/>}
            <h1>{result.name}</h1>
            <p>Release date: {result.premiered}</p>
            <p>{result.summary}</p>
        </div>
    )
}

//.replace(/(<([^>]+)>)/ig, '')