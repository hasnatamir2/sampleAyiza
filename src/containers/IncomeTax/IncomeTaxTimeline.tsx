import { useState } from 'react'
import Timeline from '../../components/common/Timeline'
import Breadcrumbs from '../../components/common/Breadcrumb'
import { useNavigate } from 'react-router-dom'
import { Card, Row } from 'react-bootstrap'

const crumbs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Income Tax',
    path: '/incomeTax',
  },
]

const IncomeTaxTimeline = () => {
  const navigate = useNavigate()

  const [activeStep, setActiveStep] = useState(null)

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <div className="py-2 px-4 d-flex justify-content-center">
        <Card className="card-container">
          <Card.Body className="d-flex justify-content-center">
            <Timeline
              steps={[
                {
                  label: 'Maintain NI Number',
                  onClick: () => navigate('/niNumber'),
                },
                {
                  label: 'Get Business Names',
                  onClick: () => navigate('/'),
                },
                {
                  label: 'Prepare Tax Values',
                  onClick: () => navigate('/'),
                },
                {
                  label: 'Submit Tax Values',
                  onClick: () => navigate('/'),
                },
              ]}
              // activeStep={activeStep}
            />
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default IncomeTaxTimeline
