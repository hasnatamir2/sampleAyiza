import NavbarMain from '../common/NavbarMain'
import FooterMain from '../common/FooterMain'
import { Container } from 'react-bootstrap'

const AppLayout = (props: any) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarMain />
      <>{props.children}</>
      <FooterMain />
    </div>
  )
}

export default AppLayout
