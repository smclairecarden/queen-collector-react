import { useNavigate } from 'react-router-dom'

const QueenActions = ({ queen, user }) => {
  const navigate = useNavigate()
  return (
    queen.profile_id === user.id &&
    <div className="actions">
      <button className="btn warn" onClick={() => navigate(`/queens/${queen.id}/edit`, { state: queen })}>Edit</button>
      <button className="btn danger" onClick={() => navigate(`/queens/${queen.id}/confirmation`, { state: queen })}>Delete</button>
    </div>
  )
}

export default QueenActions