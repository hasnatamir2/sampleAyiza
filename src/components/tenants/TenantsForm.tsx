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

const TenantForm = ({
  handleFormSubmit,
  formHookSubmit,
  registerInput,
  errors,
  navigate,
  disableMode,
  mode,
}: any) => {
  return (
    <Card className="card-container">
      <Card.Header>
        <div className="card-header-content">
          <span>Add Tenant</span>
          <div>
            <Button
              type="submit"
              onClick={() => navigate(-1)}
              variant="outline-secondary"
              className="btn back-but"
            >
              Back
            </Button>
            <Button
              type="submit"
              onClick={formHookSubmit(handleFormSubmit)}
              variant="outline-success"
              className="btn save-but"
              disabled={disableMode}
            >
              Save
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
            <Form.Group as={Row} controlId="name" className="mt-2">
              <Form.Label column sm={3}>
                Name
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Max: 7 Characters"
                  required
                  feedbackTooltip
                  isInvalid={errors.tenantName}
                  autoFill={false}
                  disabled={mode}
                  {...registerInput('name', {
                    required: {
                      value: true,
                      message: 'Tenant name is required',
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
                      <span className="muted"></span>
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
                {errors.name && (
                  <Form.Control.Feedback type="invalid">
                    {errors.name.message}
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="status" className="mt-2">
              <Form.Label column sm={3}>
                Status
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  type="select"
                  placeholder="Tenant status"
                  required
                  disabled={disableMode}
                  {...registerInput('status', {
                    required: true,
                    maxLength: 70,
                  })}
                >
                  <option value="ACTIVE">Active</option>
                  <option value="INACTIVE">In Active</option>
                  <option value="DEPRECIATED">Depreciated</option>
                </Form.Control>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted"></span>
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
                {errors?.status?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Tenant status is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="type" className="mt-2">
              <Form.Label column sm={3}>
                Type
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  as="select"
                  type="select"
                  placeholder="Type"
                  required
                  disabled={disableMode}
                  {...registerInput('type', {
                    required: true,
                    maxLength: 70,
                  })}
                >
                  <option value="TEST">Test</option>
                  <option value="PRODUCTION">Production</option>
                  <option value="TEMPLATE">Template</option>
                </Form.Control>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted"></span>
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
                {errors?.type?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Tenant type is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="owner" className="mt-2">
              <Form.Label column sm={3}>
                Owner
              </Form.Label>
              <Col sm={8}>
                <Form.Control
                  type="text"
                  placeholder="Max: 7 Characters"
                  required
                  feedbackTooltip
                  autoFill={false}
                  disabled={disableMode}
                  {...registerInput('owner', {
                    required: {
                      value: true,
                      message: 'Tenant owner is required',
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
                      <span className="muted"></span>
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
                {errors?.owner?.type === 'required' && (
                  <Form.Control.Feedback type="invalid">
                    Tenant owner is required
                  </Form.Control.Feedback>
                )}
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="isLockedForAdmin" className="mt-2">
              <Form.Label column sm={3}>
                Is Locked For Admin
              </Form.Label>
              <Col sm={8} className="mt-2">
                <Form.Check
                  type="switch"
                  as="input"
                  className="custom-switch ay_switch"
                  variant="success"
                  disabled={disableMode}
                  {...registerInput('isLockedForAdmin')}
                />
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip>
                      <span className="muted"></span>
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

export default TenantForm
