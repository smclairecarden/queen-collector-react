import { useNavigate } from 'react-router-dom'

const ShowActions = ({ show, user }) => {
  const navigate = useNavigate()
  return (
    show === user.id &&
    <div className="actions">
      <button className="btn warn" onClick={() => navigate(`/shows/${show.id}/edit`, { state: show })}>Edit</button>
      <button className="btn danger" onClick={() => navigate(`/shows/${show.id}/confirmation`, { state: show })}>Delete</button>
    </div>
  )
}

export default ShowActions