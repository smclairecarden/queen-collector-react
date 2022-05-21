import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ShowDetails.css'

// Services
import { getOne } from '../../services/shows'

// Components
import ShowActions from './components/ShowActions'
import ShowCard from '../../components/ShowCard/ShowCard'

const ShowDetails = ({ user }) => {
  const { id } = useParams()
  const [show, setShow] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const showData = await getOne(id)
      setShow(showData)
    }
    fetchOne()
  }, [id])

  return (
    show &&
    <>
      <section className="toy-details-container">
        <div className="toy-img">
          <ShowCard show={show} />
        </div>
        <div className="toy-details">
          <h1>{show.name}</h1>
          <p>{show.description}</p>
          <ShowActions show={show} user={user} />
        </div>
      </section>
    </>
  )
}

export default ShowDetails