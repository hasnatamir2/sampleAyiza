import { Row, Col, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const SidebarAdmin = (props: any) => {
  const { children } = props
  return (
    <Row>
      <Col sm={2} className="pr-0">
        <Nav
          variant="tabs"
          className="d-md-block bg-light flex-column min-vh-90 sidebar-menu"
        >
          <Nav.Item>
            <Nav.Link eventKey="/adminPanel/tenants" className="border-0">
              <FontAwesomeIcon icon={solid('user-tie')} />{' '}
              <Link to="/adminPanel/tenants">Tenants</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={10} className="pl-0">
        {children}
      </Col>
    </Row>
  )
}

export default SidebarAdmin
