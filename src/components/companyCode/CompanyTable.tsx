import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Table,
  Card,
  Button,
  Form,
  Row,
  Col,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

const CompanyTable = (props: any) => {
  const {
    companies,
    isLoading,
    Navigate,
    page,
    setPage,
    pageSize,
    setPageSize,
    handleDelete,
    handleEdit,
    handleView,
    handleCopy,
    handleSelected,
    selectedMultiId,
    handleMultiDelete,
    handleSearch,
    search,
  } = props
  return (
    <div className="py-2 px-4 d-flex justify-content-center">
      <Card className="card-container">
        <Card.Header>
          <div className="card-header-content">
            <span>Company Codes</span>
            {/* <Form.Select className="quck-action w-25">
              <option>Quick Actions</option>
            </Form.Select> */}
          </div>
        </Card.Header>
        <Card.Body>
          <Row className="table-action-panel">
            <Col sm={6} className="d-flex">
              <Button
                type="submit"
                disabled={isLoading}
                onClick={() => Navigate('/addCompanyCode')}
                className="btn btn-blue"
              >
                Add
              </Button>
              <Button
                disabled={isLoading || selectedMultiId.length < 1}
                className="red-btn"
                variant="outline-danger"
                onClick={handleMultiDelete}
              >
                Delete
              </Button>
              <div className="d-flex align-items-center w-25">
                <span className="mr-2 label">Show</span>
                <Form.Select value={pageSize} onChange={setPageSize}>
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={2}>
              <Form.Control
                type="text"
                placeholder="Search"
                className="table-search"
                size="lg"
                onChange={handleSearch}
              />
            </Col>
          </Row>
          <Table size="sm" className="mb-0">
            <thead>
              <tr>
                <th>
                  <Form.Check
                    type="checkbox"
                    as="input"
                    className="custom-switch ay_switch"
                    checked={selectedMultiId.length > 0}
                  />
                </th>
                <th>Business Name</th>
                <th>Business Type</th>
                <th>Industry</th>
                <th>Currency</th>
                <th>Financial Year</th>
                <th className='text-end'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company: any, index: number) => {
                if (
                  search
                    ? company.businessName.toLowerCase().includes(search)
                    : true
                ) {
                  return (
                    <tr key={index}>
                      <td>
                        <Form.Check
                          type="checkbox"
                          as="input"
                          className="custom-switch ay_switch"
                          onClick={() => {
                            handleSelected(company.id)
                          }}
                        />
                      </td>
                      <td>{company.businessName}</td>
                      <td>{company.businessType}</td>
                      <td>{company.industry}</td>
                      <td>{company.currency}</td>
                      <td>{company.financialYear}</td>
                      <td className='text-end'>
                        <>
                          <OverlayTrigger
                            placement="bottom"
                            overlay={<Tooltip>View</Tooltip>}
                          >
                            <Button
                              size="sm"
                              variant="outline-dark"
                              className="mr-1 table-action-btn"
                              onClick={() => handleView(company.id)}
                            >
                              <FontAwesomeIcon
                                icon={solid('magnifying-glass')}
                              />
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
                              onClick={() => handleEdit(company.id)}
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
                              onClick={() => handleCopy(company)}
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
                              onClick={() => handleDelete(company.id)}
                            >
                              <FontAwesomeIcon icon={solid('trash')} />
                            </Button>
                          </OverlayTrigger>
                        </>
                      </td>
                    </tr>
                  )
                }
              })}
            </tbody>
          </Table>
          <div className="table-pagination-footer">
            <span className="table-record-length">
              Showing {companies.length} of {companies.length} entries
            </span>
            <div className="table-footer-input-group">
              <Button variant="outline-secondary" size="sm">
                <FontAwesomeIcon icon={solid('chevron-left')} />
              </Button>
              <Form.Control type="text" value={page} />
              <Button variant="outline-secondary" size="sm">
                <FontAwesomeIcon icon={solid('chevron-right')} />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CompanyTable
