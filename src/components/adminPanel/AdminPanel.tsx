import TileCard from '../common/TileCard'
import { Row, Col, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const AdminPanel = () => {
  const navigate = useNavigate()
  return (
    <div className="admin-panel">
      <Card className="card-container">
        <Card.Body className="">
          <Row>
            <Col sm={3}>
              <TileCard
                title="Bank & Cash"
                icon="building-columns"
                link={'/adminPanel'}
                color="darkblue"
              />
            </Col>
            <Col sm={3}>
              <TileCard
                title="Customer Invoice"
                icon="money-bill"
                link={'/adminPanel'}
                color="rebeccapurple"
              />
            </Col>
            <Col sm={3}>
              <TileCard
                title="supplier bills"
                icon="money-bill"
                link={'/adminPanel'}
                color="orangered"
              />
            </Col>
            <Col sm={3}>
              <TileCard
                title="universal analytics"
                icon="chart-column"
                link={'/adminPanel'}
                color="royalblue"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AdminPanel
