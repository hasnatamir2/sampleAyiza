import { Table, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TenantsTable = (props: any) => {
  const {
    tenants,
    handleDelete,
    handleEdit,
    handleView,
    handleCopy,
  } = props

  return (
    <>
      <Table size="sm" className="mb-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Id</th>
            <th>Owner</th>
            <th>Status</th>
            <th>Type</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{tenant.name}</td>
                <td>{tenant.owner}</td>
                <td>{tenant.status}</td>
                <td>{tenant.type}</td>
                <td className="text-end">
                  <>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip>View</Tooltip>}
                    >
                      <Button
                        size="sm"
                        variant="outline-dark"
                        className="mr-1 table-action-btn"
                        onClick={() => handleView(tenant.id)}
                      >
                        <FontAwesomeIcon icon={solid('magnifying-glass')} />
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip>Edit</Tooltip>}
                    >
                      <Button
                        size="sm"
                        variant="outline-dark"
                        className="mr-1 table-action-btn"
                        onClick={() => handleEdit(tenant.id)}
                      >
                        <FontAwesomeIcon icon={solid('pencil')} />
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip>Copy</Tooltip>}
                    >
                      <Button
                        size="sm"
                        variant="outline-dark"
                        className="mr-1 table-action-btn"
                        onClick={() => handleCopy(tenant)}
                      >
                        <FontAwesomeIcon icon={solid('clipboard')} />
                      </Button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip>Delete</Tooltip>}
                    >
                      <Button
                        size="sm"
                        variant="outline-dark"
                        className="mr-1 table-action-btn"
                        onClick={() => handleDelete(tenant.id)}
                      >
                        <FontAwesomeIcon icon={solid('trash')} />
                      </Button>
                    </OverlayTrigger>
                  </>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default TenantsTable
