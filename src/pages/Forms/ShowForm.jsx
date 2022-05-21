import '../../styles/Form.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Services
import { getOne } from '../../services/shows'

// Components
import ShowInput from './ShowInput'

// Image Assets


const ShowForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateShow(form) : props.addShow(form)
    navigate(`/shows`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const showData = await getOne(id)
      setForm({
        id: showData.id,
        name: showData.name,
        description: showData.description
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    <>
      <div className="page-header">
        {id
          ? <h1>Edit Show</h1>
          : <>
          <h1>Add Show</h1>
          </>
        }
      </div>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <ShowInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
    </>
  )
}

export default ShowForm