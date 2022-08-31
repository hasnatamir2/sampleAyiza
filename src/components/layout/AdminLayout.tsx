import NavbarAdmin from '../common/NavbarAdmin'
import FooterMain from '../common/FooterMain'
import SidebarAdmin from '../common/SidebarAdmin'
import { Container } from 'react-bootstrap'

const AdminLayout = (props: any) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavbarAdmin />
      <SidebarAdmin>
        <div className='ml-4 mr-4'>{props.children}</div>
      </SidebarAdmin>
      <FooterMain />
    </div>
  )
}

export default AdminLayout
