
import Nav from './components/Nav'

const Header = (props) => {
  return (
    <header>
      <Nav user={props.user} handleLogout={props.handleLogout} />
    </header>
  )
}

export default Header