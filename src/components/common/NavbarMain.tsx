import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AyizaLogo from '../../assets/images/Ayiza-Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const NavbarMain = (props: any) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg" id="mainNav">
      <Navbar.Brand>
        <Link to="/">
          <img src={AyizaLogo} alt="Ayiza Logo" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav className="" navbarScroll>
          <NavDropdown
            title={<FontAwesomeIcon icon={solid('user')} />}
            align="end"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>
              <Link to="/adminPanel">Admin Panel</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/login">Login</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarMain
