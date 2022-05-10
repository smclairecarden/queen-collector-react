import { NavLink } from 'react-router-dom'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <ul>
        {props.user ?
          <>
            <li> <NavLink to='/queens'>All Queens</NavLink></li>
            <li><NavLink to='/shows'>All Shows</NavLink></li>
            <li><NavLink to='/queens/new'>Add a Queen</NavLink></li>
            <li> <NavLink to='/shows/new'>Add a Show</NavLink></li>
            <li onClick={() => props.handleLogout()}>Log out</li>
          </>
          :
          <>
            <li> <NavLink to='/login'>Login</NavLink></li>
            <li> <NavLink to='/signup'>Signup</NavLink></li>
          </>
        }
      </ul>
    </nav>
  )
}

export default Nav