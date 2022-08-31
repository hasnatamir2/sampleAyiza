import { Card, Row, Col } from 'react-bootstrap'
import TileCard from '../common/TileCard'

const Home = (props: any) => {
  return (
    <>
      <div className="py-2 px-4 d-flex justify-content-center">
        <Card className="card-container">
          <Card.Body>
            <Row>
              <Col sm={3}>
                <TileCard
                  title="Company Code"
                  icon="building-columns"
                  link={'/companyCode'}
                />
              </Col>
              <Col sm={3}>
                <TileCard
                  title="File Income Tax"
                  icon="wallet"
                  link={'/incomeTax'}
                  color="rebeccapurple"
                />
              </Col>
              <Col sm={3}>
                <TileCard
                  title="Accounting"
                  icon="box-archive"
                  link={'/receivables'}
                  color="orangered"
                />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Home
