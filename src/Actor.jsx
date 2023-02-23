import { useEffect, useState } from "react"
import { useParams,Link } from "react-router-dom"

export function Actor()
{
    const params = useParams()
    const [actor, setActor] = useState(null)
    const [actorsShows, setActorsShows] = useState(null)

    useEffect(() => {
        fetch('https://api.tvmaze.com/people/' + params.id + '?embed=castcredits')
            .then(response => response.json())
            .then((data) => setActor(data))
    }, [actor])
    
    useEffect (() => {
        fetch ('https://api.tvmaze.com/people/' + params.id + '/castcredits?embed=show')
            .then (response => response.json())
            .then((data) => setActorsShows(data))
    }, [actorsShows])

   
    if (actor && actorsShows) {
        return (
            <>
                <h1>{actor.name}</h1>
                {actor.image != null ? <img src={actor.image.medium} /> : <img src="https://images.pexels.com/photos/3962259/pexels-photo-3962259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sorry we're closed sign" />}
                <h4>Born {actor.birthday}</h4>
                <h4>From {actor.country?.name}</h4>
                <div>
                    <h3>Starred in:</h3>
                        {actorsShows.map((show) => <p key={show._embedded.show.id}><Link to={"/show/" + show._embedded.show.id}>{show._embedded.show.name}</Link></p>)}
                </div>
            </>
        )
    } else {
        return (
                <h2>Loading...</h2>
        )
    }
}