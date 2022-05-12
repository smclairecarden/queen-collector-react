import { Link } from 'react-router-dom'


const ShowCard = ({ show, isCard }) => {

  return (
    <Link to={`/shows/${show.id}`} className="toy-card" >
      {isCard && <><h2>{show.name}</h2><p>{show.description}</p></>}
    </Link>
  )
}

export default ShowCard