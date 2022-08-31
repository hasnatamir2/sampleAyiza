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
import NiNumberTable from './NiNumberTable'

const BusinessNameTable = (props: any) => {
  const { data = [] } = props
  return (
    <Table size="sm" className="mb-0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Trading Name</th>
          <th>Type Of Business</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: number) => (
          <tr>
            <td key={index}>{item.businessId}</td>
            <td key={index}>{item.tradingName}</td>
            <td key={index}>{item.typeOfBusiness}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

const IncomeTaxTable = (props: any) => {
  const {
    businessData,
    companyCode,
    setCompanyCode,
    isLoading,
    navigate,
    companyCodes,
    handleDeleteNiNumber,
    handleNiNumberSave,
  } = props

  return (
    <div className="py-2 px-4 d-flex justify-content-center">
      <Card className="card-container">
        <Card.Header>
          <div className="card-header-content">
            <span>Maintain NI Number</span>
            <div>
              <Button
                type="submit"
                disabled={isLoading}
                onClick={() => navigate('/incomeTax')}
                className="btn back-but"
              >
                Back
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                onClick={handleNiNumberSave}
                className="btn save-but"
              >
                Save
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Row className="table-action-panel align-items-center">
            <Col sm={3} className="d-flex">
              <Button
                type="submit"
                disabled={isLoading}
                onClick={() => navigate('/addNiNumber')}
                className="btn btn-blue"
              >
                Add
              </Button>
              <Button
                // disabled={isLoading || selectedMultiId.length < 1}
                className="red-btn"
                variant="outline-danger"
                // onClick={handleMultiDelete}
              >
                Delete
              </Button>
              <div className="d-flex align-items-center w-50">
                <span className="mr-2 label">Show</span>
                <Form.Select
                // value={pageSize} onChange={setPageSize}
                >
                  <option>10</option>
                  <option>20</option>
                  <option>30</option>
                </Form.Select>
              </div>
            </Col>
            <Col sm={5}>
              <Row className="align-items-center">
                <Col sm={3} className="p-0">
                  <div className=" label">Company Code</div>
                </Col>
                <Col sm={7}>
                  <Form.Select
                    value={companyCode}
                    onChange={(e) => setCompanyCode(e.target.value)}
                  >
                    {companyCodes.map((item: any, index: number) => {
                      return (
                        <option key={index} value={item.companyCode}>
                          {item.companyCode}
                        </option>
                      )
                    })}
                  </Form.Select>
                  <OverlayTrigger
                    placement="bottom"
                    overlay={
                      <Tooltip>
                        <span className="muted">
                          NI Number is used to get the business names for income
                          tax declaration for self employed businesses.
                        </span>
                      </Tooltip>
                    }
                  >
                    <span
                      className="help-tp mt-2"
                      data-toggle="tooltip"
                      data-placement="bottom"
                    >
                      i
                    </span>
                  </OverlayTrigger>
                </Col>
              </Row>
            </Col>
            <Col sm={2}>
              <Form.Control
                type="text"
                placeholder="Search"
                className="table-search"
                size="lg"
                // onChange={handleSearch}
              />
            </Col>
          </Row>
          <NiNumberTable
            data={businessData}
            navigate={navigate}
            handleDeleteNiNumber={handleDeleteNiNumber}
          />
          <div className="table-pagination-footer">
            <span className="table-record-length">Showing 1 of 1 entries</span>
            <div className="table-footer-input-group">
              <Button variant="outline-secondary" size="sm">
                <FontAwesomeIcon icon={'chevron-left'} />
              </Button>
              <Form.Control type="text" value={1} />
              <Button variant="outline-secondary" size="sm">
                <FontAwesomeIcon icon={'chevron-right'} />
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default IncomeTaxTable
