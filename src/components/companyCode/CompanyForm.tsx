import {
  Spinner,
  Card,
  Form,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap'

const CompanyForm = ({
  handleFormSubmit,
  formHookSubmit,
  registerInput,
  errors,
  isLoading,
  navigate,
  disableMode,
}: any) => {
  return (
    <Card className="card-container">
      <Card.Header>
        <div className="card-header-content">
          <span>Add Company Codes</span>
          <div>
            <Button
              type="submit"
              disabled={isLoading}
              onClick={() => navigate(-1)}
              variant="outline-secondary"
              className="btn back-but"
            >
              {isLoading ? <Spinner animation="border" /> : 'Back'}
            </Button>
            <Button
              type="submit"
              onClick={formHookSubmit(handleFormSubmit)}
              variant="outline-success"
              className="btn save-but"
              disabled={disableMode}
            >
              {isLoading ? <Spinner animation="border" /> : 'Save'}
            </Button>
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <>
          <Form
            noValidate
            validated={Object.keys(errors).length > 0}
            className="center-form m-auto"
          >
            <Form.Group as={Row} controlId="formBusinessName" className="mt-2">
              <Form.Label column sm={3}>
                Business name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Max: 7 Characters"
                  required
                  feedbackTooltip
                  isInvalid={errors.businessName}
                  autoFill={false}
                  disabled={disableMode}
                  {...registerInput('businessName', {
                    required: {
                      value: true,
                      message: 'Business name is required',
                    },
                    maxLength: {
                      value: 7,
                      message: 'Max: 7 Characters',
                    },
                  })}
                />
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted">ID for the organisation</span>
                    </Tooltip>
                  }
                >
                  <span
                    className="help-tp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                  >
                    i
                  </span>
                </OverlayTrigger>
                {errors.businessName && (
                  <Form.Control.Feedback type="invalid">
                    {errors.businessName.message}
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formBusinessType" className="mt-2">
              <Form.Label column sm={3}>
                Type of Business
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  type="select"
                  placeholder="Business type"
                  required
                  disabled={disableMode}
                  {...registerInput('businessType', {
                    required: true,
                    maxLength: 70,
                  })}
                >
                  <option>Select1</option>
                  <option>Select2</option>
                  <option>Select3</option>
                </Form.Control>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted">
                        If legal form company, specify company type
                      </span>
                    </Tooltip>
                  }
                >
                  <span
                    className="help-tp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                  >
                    i
                  </span>
                </OverlayTrigger>
                {errors?.businessType?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Business type is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessIndustry"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Industry
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  type="select"
                  placeholder="Business industry"
                  required
                  disabled={disableMode}
                  {...registerInput('industry', {
                    required: true,
                    maxLength: 70,
                  })}
                >
                  <option>Industry1</option>
                  <option>Industry2</option>
                  <option>Industry3</option>
                </Form.Control>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted">ID for the organisation</span>
                    </Tooltip>
                  }
                >
                  <span
                    className="help-tp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                  >
                    i
                  </span>
                </OverlayTrigger>
                {errors?.industry?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Business industry is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessCountry"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Country
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  type="select"
                  placeholder="Business country"
                  required
                  disabled={disableMode}
                  {...registerInput('country', { required: true })}
                >
                  <option>Select1</option>
                  <option>Select2</option>
                  <option>Select3</option>
                </Form.Control>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted">
                        Country where this entity is legally incorporated or the
                        business is registered
                      </span>
                    </Tooltip>
                  }
                >
                  <span
                    className="help-tp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                  >
                    i
                  </span>
                </OverlayTrigger>
                {errors?.country?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Business country is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessCurrency"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Currency
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  type="select"
                  placeholder="Business Currency"
                  required
                  disabled={disableMode}
                  {...registerInput('currency', { required: true })}
                >
                  <option>Select1</option>
                  <option>Select2</option>
                  <option>Select3</option>
                </Form.Control>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted">
                        The type of exchange rate for foreign currency
                        transactions
                      </span>
                    </Tooltip>
                  }
                >
                  <span
                    className="help-tp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                  >
                    i
                  </span>
                </OverlayTrigger>
                {errors?.currency?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Business currency is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessTimeZone"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Time Zone
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  type="select"
                  placeholder="Time Zone"
                  required
                  disabled={disableMode}
                  {...registerInput('timezone', { required: true })}
                >
                  <option>Select1</option>
                  <option>Select2</option>
                  <option>Select3</option>
                </Form.Control>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted">
                        Time zone of address for registered office
                      </span>
                    </Tooltip>
                  }
                >
                  <span
                    className="help-tp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                  >
                    i
                  </span>
                </OverlayTrigger>
                {errors?.timezone?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Time zone is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessFinancialYear"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Financial Year
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  type="select"
                  placeholder="Financial Year"
                  required
                  disabled={disableMode}
                  {...registerInput('financialYear', {
                    required: true,
                    valueAsNumber: true,
                  })}
                >
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                </Form.Control>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted">
                        Financial Year defines the accounting calendar for
                        keeping books
                      </span>
                    </Tooltip>
                  }
                >
                  <span
                    className="help-tp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                  >
                    i
                  </span>
                </OverlayTrigger>
                {errors?.financialYear?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Financial year is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              controlId="formBusinessCalculateVAT"
              className="mt-2"
            >
              <Form.Label column sm={3}>
                Calculate VAT
              </Form.Label>
              <Col sm={8} className="mt-2">
                <Form.Check
                  type="switch"
                  as="input"
                  className="custom-switch ay_switch"
                  variant="success"
                  disabled={disableMode}
                  {...registerInput('calculateVAT')}
                />
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted">
                        If VAT is calculated net of discount for sales, activate
                        this
                      </span>
                    </Tooltip>
                  }
                >
                  <span
                    className="help-tp"
                    data-toggle="tooltip"
                    data-placement="bottom"
                  >
                    i
                  </span>
                </OverlayTrigger>
              </Col>
            </Form.Group>
          </Form>
        </>
      </Card.Body>
    </Card>
  )
}

export default CompanyForm
