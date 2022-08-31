import { Button, Card, Spinner } from 'react-bootstrap'
import TenantsTable from './TenantsTable'

const Tenants = (props: any) => {
  const {
    tenants,
    loading,
    Navigate,
    handleMultiDelete,
    handleSelected,
    handleDelete,
    handleEdit,
    handleView,
    handleCopy,
  } = props
  return (
    <Card className="card-container tenants">
      <Card.Header>
        <div className="card-header-content">
          <h4 className="m-0">Tenants</h4>
          <Button
            className="btn-blue"
            onClick={() => Navigate('/adminPanel/addTenant')}
          >
            Add
          </Button>
        </div>
      </Card.Header>
      <Card.Body>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        ) : (
          <TenantsTable
            tenants={tenants}
            selectedMultiId={[]}
            handleSelected={handleSelected}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleView={handleView}
            handleCopy={handleCopy}
          />
        )}
      </Card.Body>
    </Card>
  )
}

export default Tenants
