import './Home.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { login, getUser } from '../../services/authService'


const Home = ({ user, setUser }) => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(form)
    const currentUser = getUser()
    setUser(currentUser)
    navigate('/queens')
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="home-container">
      <h1>Welcome to The Queen Collector!</h1>
      {!user &&
        <section className="login-container">
          <form onSubmit={handleSubmit} className="login">
            <h1>Login</h1>
            <label>Email:</label>
            <input
              value={form.email} onChange={handleChange}
              name="email" type="email" autoComplete="off"
            />
            <label>Password:</label>
            <input
              value={form.password} onChange={handleChange}
              name="password" type="password" autoComplete="off"
            />
            <button type="submit" className="btn submit">Login</button>
          </form>
        </section>
      }
    </div>
  )
}

export default Home