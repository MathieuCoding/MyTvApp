export function Result(props)
{
    const {show} = props.details

    return (
        <div className="card-show">
            <p key={show.id}>{show.name}</p>
            {show.image != null ? <img src={show.image.medium} alt={show.name} width="200px" height="auto"/> : <img src="https://images.pexels.com/photos/3962259/pexels-photo-3962259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="we are closed sign" width="200px" height="auto"/>}       
        </div>
    )
}