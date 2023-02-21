import { useEffect, useState } from "react"
import { Result } from "./Result";


export function Search() 
{

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);
    
    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((response) => response.json())
        .then((data) => setResult(data));
    });

    // const show = result.map((show) => 
    // <div className="card-show">
    //     <p key={show.show.id}>{show.show.name}</p>
    //     {show.show.image != null ? <img src={show.show.image.medium} alt={show.show.name} width="200px" height="auto"/> : <img src="https://images.pexels.com/photos/3962259/pexels-photo-3962259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="we are closed sign" width="200px" height="auto"/>}       
    // </div>
    // );

    // const show = result.map((show) => <Result details={show} />);

    return (
        <div>
            <input id="searchBar" type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
            <div className="card-container">
                {result.map((tvshow) => <Result details={tvshow} />)}
            </div>
        </div>
    )      
}


