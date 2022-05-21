import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

// Components
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import QueenForm from '../pages/Forms/QueenForm'
import ShowForm from '../pages/Forms/ShowForm'
import QueenList from '../pages/QueenList/QueenList'
import ShowList from '../pages/ShowList/ToyList'
import Header from '../components/Header/Header'
import ShowDetails from '../pages/ShowDetails/ShowDetails'
import QueenDetails from '../pages/QueenDetails/QueenDetails'
import Confirmation from '../pages/Confirmation/Confirmation'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

// Services
import * as authService from '../services/authService'
import * as queenService from '../services/queens'
import * as showService from '../services/shows'


function App() {
  const navigate = useNavigate()
  const [queens, setQueens] = useState([])
  const [shows, setShows] = useState([])
  const [user, setUser] = useState(authService.getUser())



  const addQueen = async (queenData) => {
    const queen = await queenService.create(queenData)
    setQueens([...queens, queen])
  }

  const addShow = async (showData) => {
    const show = await showService.create(showData)
    setShows([...shows, show])
  }

  const updateQueen = async (queenData) => {
    const updatedQueen = await queenService.update(queenData)
    setQueens(queens.map((queen) => (
    queen.id === updatedQueen.id ? updatedQueen : queen
    )))
  }

  const updateShow = async (showData) => {}

  const deleteQueen = async (id) => {
    await queenService.deleteOne(id)
    setQueens(queens.filter(queen => queen.id !== parseInt(id)))
  }

  const deleteShow = async (id) => {}

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await queenService.getAll()
      setQueens(data)
    }
    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await showService.getAll()
      setShows(data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Header user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/signup" element={<Signup user={user} setUser={setUser} />} />
          <Route path="/shows" element={
            <ProtectedRoute user={user}>
              <ShowList shows={shows} />
            </ProtectedRoute>
          } />
          <Route path="/queens" element={
            <ProtectedRoute user={user}>
              <QueenList queens={queens} />
            </ProtectedRoute>
          } />
          <Route path="/shows/:id" element={
            <ProtectedRoute user={user}>
              <ShowDetails shows={shows} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/queens/:id" element={
            <ProtectedRoute user={user}>
              <QueenDetails user={user} />
            </ProtectedRoute>
          } />
          <Route path="/queens/new" element={
            <ProtectedRoute user={user}>
              <QueenForm addQueen={addQueen} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/shows/new" element={
            <ProtectedRoute user={user}>
              <ShowForm addShow={addShow} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/queens/:id/edit" element={
            <ProtectedRoute user={user}>
              <QueenForm queens={queens} updateQueen={updateQueen} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/shows/:id/edit" element={
            <ProtectedRoute user={user}>
              <ShowForm shows={shows} updateShow={updateShow} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/queens/:id/confirmation" element={
            <ProtectedRoute user={user}>
              <Confirmation deleteQueen={deleteQueen} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/shows/:id/confirmation" element={
            <ProtectedRoute user={user}>
              <Confirmation deleteShow={deleteShow} user={user} />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </>
  )
}

export default App