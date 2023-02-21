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

    console.log(result);
    const show = result.map((show) => 
    <div className="card-show">
        <p key={show.show.id}>{show.show.name}</p>
        {show.show.image != null && <img src={show.show.image.medium} alt="sunshine in a tree" width="200px" height="auto"/> }       
    </div>
    );

    return (
        <div>
            <input type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
            <div className="card-container">
                {show}
            </div>
        </div>
    )      
}