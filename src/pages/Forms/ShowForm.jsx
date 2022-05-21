import '../../styles/Form.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Services


// Components
import ShowInput from './ShowInput'

// Image Assets


const ShowForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateToy(form) : props.addToy(form)
    navigate(`/toys`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {}, [id])

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