import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './QueenDetails.css'
import { getOne, assocShow } from '../../services/queens'
import QueenActions from './components/QueenActions'
import Reads from './components/Reads'
import ShowCollection from './components/ShowCollection'

// Services


const QueenDetails = ({ catImages, user }) => {
  const { id } = useParams()
  const [queen, setQueen] = useState(null)
  const [availableShows, setAvailableShows] = useState([])

  const addToCollection = async (e) => {
    e.preventDefault()
    const showId = parseInt(e.target.id)
    const updatedQueen = await assocShow(queen.id, showId)
    setAvailableShows(availableShows.filter(show => showId !== show.id))
    setQueen({...updatedQueen})
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setQueen(data.queen)
      setAvailableShows(data.available_shows)
    }
    fetchOne()
  }, [id])

  if (!queen) return <h1>Loading</h1>

  return (
    <>
      <section className="cat-container">
        <div className="cat-img">
        </div>
        <div className="cat-details">
          <h1>{queen.name}</h1>
          <p>Season: {queen.season}</p>
          <p>{queen.description}</p>
        <QueenActions queen={queen} user={user} />
        </div>
      </section>
      <div className="feedings-toy-container">
        <Reads
          queen={queen}
          user={user}
          setQueen={setQueen}
        />
        <ShowCollection
          queen={queen}
          user={user}
          shows={availableShows}
          addToCollection={addToCollection}
        />
      </div>
    </>
  )
}

export default QueenDetails