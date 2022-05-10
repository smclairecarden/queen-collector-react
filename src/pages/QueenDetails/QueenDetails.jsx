import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './QueenDetails.css'
import { getOne } from '../../services/queens'

// Services


const QueenDetails = ({ catImages, user }) => {
  const { id } = useParams()
  const [queen, setQueen] = useState(null)
  const [availableShows, setAvailableShows] = useState([])

  const addToCollection = async (e) => {}

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

        </div>
      </section>
      <div className="feedings-toy-container">
        {/* <Feedings
          cat={cat}
          user={user}
          setCat={setCat}
        />
        <ToyCollection
          cat={cat}
          user={user}
          toys={availableToys}
          addToCollection={addToCollection}
        /> */}
      </div>
    </>
  )
}

export default QueenDetails