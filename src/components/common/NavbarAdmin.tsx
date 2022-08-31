import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const NavbarAdmin = (props: any) => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Navbar.Brand className='mt-2' >Ayiza System Admin</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" className="justify-content-end">
        <Nav className="" navbarScroll>
          <NavDropdown
            title={<FontAwesomeIcon icon={solid('user')} />}
            align="end"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item disabled>
              <Link to="/profile" className="text-muted">
                {' '}
                My Profile
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link to="/login" className="text-danger">
                {' '}
                Logout
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavbarAdmin
