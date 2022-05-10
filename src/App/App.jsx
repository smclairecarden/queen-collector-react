import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

// Components
import Home from '../pages/Home/Home'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import QueenForm from '../pages/Forms/QueenForm'
import ShowForm from '../pages/Forms/ShowForm'
import QueenList from '../pages/QueenList/CatList'
import ShowList from '../pages/ShowList/ToyList'
import Header from '../components/Header/Header'
import ShowDetails from '../pages/ShowDetails/ToyDetails'
import QueenDetails from '../pages/QueenDetails/CatDetails'
import Confirmation from '../pages/Confirmation/Confirmation'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

// Services
import * as authService from '../services/authService'

// Image Assets
import CoolCat from '../assets/cool-cat.svg'
import NerdCat from '../assets/nerd-cat.svg'
import HappyCat from '../assets/happy-cat.svg'
import CatInBox from '../assets/cat-in-box.svg'
import TeaCupCat from '../assets/teacup-cat.svg'
import SkaterCat from '../assets/sk8r-boi-cat.svg'

function App() {
  const navigate = useNavigate()
  const [cats, setCats] = useState([])
  const [toys, setToys] = useState([])
  const [user, setUser] = useState(authService.getUser())

  const catImages = [
    SkaterCat, CoolCat,
    NerdCat, HappyCat,
    CatInBox, TeaCupCat,
  ]

  const addCat = async (catData) => {}

  const addToy = async (toyData) => {}

  const updateCat = async (catData) => {}

  const updateToy = async (toyData) => {}

  const deleteCat = async (id) => {}

  const deleteToy = async (id) => {}

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

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
              <ShowList toys={toys} />
            </ProtectedRoute>
          } />
          <Route path="/queens" element={
            <ProtectedRoute user={user}>
              <QueenList cats={cats} catImages={catImages} />
            </ProtectedRoute>
          } />
          <Route path="/shows/:id" element={
            <ProtectedRoute user={user}>
              <ShowDetails toys={toys} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/queens/:id" element={
            <ProtectedRoute user={user}>
              <QueenDetails catImages={catImages} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/queens/new" element={
            <ProtectedRoute user={user}>
              <QueenForm addCat={addCat} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/shows/new" element={
            <ProtectedRoute user={user}>
              <ShowForm addToy={addToy} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/queens/:id/edit" element={
            <ProtectedRoute user={user}>
              <QueenForm cats={cats} updateCat={updateCat} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/shows/:id/edit" element={
            <ProtectedRoute user={user}>
              <ShowForm toys={toys} updateToy={updateToy} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/queens/:id/confirmation" element={
            <ProtectedRoute user={user}>
              <Confirmation deleteCat={deleteCat} user={user} />
            </ProtectedRoute>
          } />
          <Route path="/shows/:id/confirmation" element={
            <ProtectedRoute user={user}>
              <Confirmation deleteToy={deleteToy} user={user} />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
    </>
  )
}

export default App