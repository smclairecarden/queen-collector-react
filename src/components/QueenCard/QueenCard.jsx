import { Link } from 'react-router-dom'

const QueenCard = ({ queen }) => {

  return (
    <Link to={`/queens/${queen.id}`} className="card">
      <div className="card-content">
        <div className="card-img-container">
        </div>
        <h2 className="card-title">{queen.name}</h2>
        <p>Season: {queen.season}</p>
        <p><small>{queen.description}</small></p>
      </div>
    </Link>
  )
}

export default QueenCard

