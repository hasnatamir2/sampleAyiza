import { Table, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NiNumberTable = (props: any) => {
  const { data = [], navigate, handleDeleteNiNumber } = props
  return (
    <Table size="sm" className="mb-0">
      <thead>
        <tr>
          <th>Country</th>
          <th>NI Number</th>
          <th className="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => (
          <tr>
            <td key={index}>{item.Country}</td>
            <td key={index}>{item.niNumber}</td>
            <td key={index} className="text-end">
              <>
                <OverlayTrigger
                  placement="bottom"
                  overlay={<Tooltip>Edit</Tooltip>}
                >
                  <Button
                    size="sm"
                    variant="outline-dark"
                    className="mr-1 table-action-btn"
                    onClick={() => navigate(`/addNiNumber?id=${item.id}`)}
                  >
                    <FontAwesomeIcon icon={'pencil'} />
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
                    onClick={() => handleDeleteNiNumber(item.id)}
                  >
                    <FontAwesomeIcon icon={'trash'} />
                  </Button>
                </OverlayTrigger>
              </>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default NiNumberTable
