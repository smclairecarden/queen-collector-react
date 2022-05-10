import { useState } from 'react'
import moment from 'moment'

// Services
import { addRead } from '../../../services/queens'
import QueenActions from './QueenActions'

const initialState = {
  meal: 'B',
  date: moment(new Date()).format('YYYY-MM-DDTHH:mm')
}

const ReadForm = ({ queen, setQueen }) => {
  const [form, setForm] = useState(initialState)

  const addToReads = async (e) => {
    e.preventDefault()
    setForm(initialState)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h3>The Library Is Open!</h3>

      {!queen.read &&
        <form onSubmit={addToReads}>
          <div>
            <label htmlFor="read">Read:</label>
            <input
          value={form.read ? form.read : ''} onChange={handleChange} id="read"
          required name="read" type="text" placeholder="Your read here" autoComplete="off"
          />
          </div>
          <div>
            <label htmlFor="name">Your Name:</label>
            <input
          value={form.name ? form.name : ''} onChange={handleChange} id="name"
          required name="name" type="text" placeholder="Your name here" autoComplete="off"
      />
          </div>

          <button type="submit" className="btn submit">Read this Queen</button>
        </form>
      }
    </>
  )
}

export default ReadForm