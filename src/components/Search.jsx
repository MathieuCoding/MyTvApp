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
    },[result]);

    return (
        <div>
            <input id="searchBar" type="text" onChange={(e) => setQuery(e.target.value)} value={query} placeholder="Search"/>
            <div className="card-container">
                {result.map((tvshow) => <Result key={tvshow.show.id}  details={tvshow} />)}
            </div>
        </div>
    )      
}


