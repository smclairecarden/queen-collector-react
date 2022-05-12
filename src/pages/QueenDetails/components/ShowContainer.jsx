import { Link } from 'react-router-dom'

const ShowContainer = ({ show, addToCollection }) => {
  return (
    <div key={show.id} className="toy-container">
      <Link to={`/shows/${show.id}`}>
        <p>{show.name}</p>
      </Link>
      {addToCollection &&
        <form id={show.id} onSubmit={addToCollection}>
          <button type="submit" className="btn submit">Add Show</button>
        </form>
      }
    </div>
  )
}

export default ShowContainer