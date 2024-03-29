import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../styles/Form.css'

// Services
import { getOne } from '../../services/queens'

// Components
import QueenInput from './QueenInput'


const QueenForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateQueen(form) : props.addQueen(form)
    navigate(`/queens`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.queen.id,
        name: data.queen.name,
        season: data.queen.season,
        description: data.queen.description
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    <>
      <div className="page-header">
        {id
          ? <h1>Edit Queen</h1>
          : <><h1>Add Queen</h1></>
        }
      </div>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <QueenInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
    </>
  )
}

export default QueenForm