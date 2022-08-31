import AdminPanel from '../../components/adminPanel/AdminPanel'
import Breadcrumbs from '../../components/common/Breadcrumb'

const crumbs = [
  {
    name: 'Home',
    path: '/adminPanel',
  },
]

const AdminPanelContainer = () => {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <AdminPanel />
    </>
  )
}

export default AdminPanelContainer
