import { useEffect, useState } from "react"

export function Search() 
{

    const [query, setQuery] = useState("");
    const [result, setResult] = useState([]);

    useEffect(() => {
        fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((response) => response.json())
        .then((data) => setResult(data));
    });

    const show = result.map((show) =>  <li key={show.show.id}>{show.show.name}</li>);

    return (
        <div>
            <input type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
            <ul>{show}</ul>
        </div>
    )      
}