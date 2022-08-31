import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  Spinner,
  Card,
  Form,
  Row,
  Col,
  Button,
  OverlayTrigger,
  Tooltip,
  Table,
} from 'react-bootstrap'
import InvoiceDynamicForm from './InvoiceDynamicForm'

const CustomerInvoiceForm = (props: any) => {
  const {
    navigate,
    isLoading,
    formHookSubmit,
    handleFormSubmit,
    registerInput,
    errors,
  } = props
  return (
    <div className="py-2 px-4 d-flex justify-content-center mb-5">
      <Card className="card-container">
        <Card.Header>
          <div className="card-header-content">
            <span>Customer Invoice</span>
            <div>
              <Button
                type="submit"
                onClick={() => navigate('/receivables')}
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
              >
                Save
              </Button>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <>
            <Row className="align-items-center">
              <Col>
                <Form
                  noValidate
                  validated={Object.keys(errors).length > 0}
                  className="m-auto"
                  // style={{ maxWidth: 750 }}
                >
                  <Row className="justify-content-between">
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="companyCode"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Company Code
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            required
                            isInvalid={errors.companyCode}
                            // disabled={mode === 'view'}
                            {...registerInput('companyCode', {
                              required: {
                                value: true,
                                message: 'Company Code is required',
                              },
                            })}
                          />
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Company Code</span>
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
                          {errors.companyCode && (
                            <Form.Control.Feedback type="invalid">
                              {errors.companyCode.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="transactionType"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Transaction Type
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            required
                            isInvalid={errors.transactionType}
                            // disabled={mode === 'view'}
                            {...registerInput('transactionType', {
                              required: {
                                value: true,
                                message: 'Transaction Type is required',
                              },
                            })}
                          />
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Transaction Type</span>
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
                          {errors.transactionType && (
                            <Form.Control.Feedback type="invalid">
                              {errors.transactionType.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="distributionChannel"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Distribution Channel
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            required
                            isInvalid={errors.distributionChannel}
                            // disabled={mode === 'view'}
                            {...registerInput('distributionChannel', {
                              required: {
                                value: true,
                                message: 'Distribution Channel is required',
                              },
                            })}
                          />
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">
                                  Distribution Channel
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
                          {errors.distributionChannel && (
                            <Form.Control.Feedback type="invalid">
                              {errors.distributionChannel.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="businessPartner"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Business Partner
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            required
                            isInvalid={errors.businessPartner}
                            // disabled={mode === 'view'}
                            {...registerInput('businessPartner', {
                              required: {
                                value: true,
                                message: 'Business Partner is required',
                              },
                            })}
                          />
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Business Partner</span>
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
                          {errors.businessPartner && (
                            <Form.Control.Feedback type="invalid">
                              {errors.businessPartner.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="invoiceCurrency"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Invoice Currency
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="select"
                            as="select"
                            required
                            isInvalid={errors.invoiceCurrency}
                            // disabled={mode === 'view'}
                            {...registerInput('invoiceCurrency', {
                              required: {
                                value: true,
                                message: 'Invoice Currency is required',
                              },
                            })}
                          >
                            <option value="1">name</option>
                            <option value="1">name</option>
                            <option value="1">name</option>
                          </Form.Control>
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Invoice Currency</span>
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
                          {errors.invoiceCurrency && (
                            <Form.Control.Feedback type="invalid">
                              {errors.invoiceCurrency.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group as={Row} controlId="faxRate" className="mt-2">
                        <Form.Label column sm={3}>
                          Fax Rate
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.faxRate}
                            // disabled={mode === 'view'}
                            {...registerInput('faxRate', {
                              required: {
                                value: true,
                                message: 'Fax Rate is required',
                              },
                            })}
                          />
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Fax Rate</span>
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
                          {errors.faxRate && (
                            <Form.Control.Feedback type="invalid">
                              {errors.faxRate.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="paymentTerms"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Payment Terms
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="select"
                            as="select"
                            isInvalid={errors.paymentTerms}
                            required
                            // disabled={mode === 'view'}
                            {...registerInput('paymentTerms', {
                              required: {
                                value: true,
                                message: 'Payment Terms is required',
                              },
                            })}
                          >
                            <option value="1">name</option>
                            <option value="2">name</option>
                            <option value="3">name</option>
                          </Form.Control>
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Payment Terms</span>
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
                          {errors.paymentTerms && (
                            <Form.Control.Feedback type="invalid">
                              {errors.paymentTerms.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="reference"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Reference
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="text"
                            isInvalid={errors.paymentTerms}
                            required
                            // disabled={mode === 'view'}
                            {...registerInput('reference', {
                              required: {
                                value: true,
                                message: 'Reference is required',
                              },
                            })}
                          />
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Reference</span>
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
                          {errors.reference && (
                            <Form.Control.Feedback type="invalid">
                              {errors.reference.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="deliverdForm"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Deliverd Form
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="select"
                            as="select"
                            isInvalid={errors.deliverdForm}
                            required
                            // disabled={mode === 'view'}
                            {...registerInput('deliverdForm', {
                              required: {
                                value: true,
                                message: 'Deliverd Form is required',
                              },
                            })}
                          >
                            <option value="1">name</option>
                            <option value="2">name</option>
                            <option value="3">name</option>
                          </Form.Control>
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Deliverd Form</span>
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
                          {errors.deliverdForm && (
                            <Form.Control.Feedback type="invalid">
                              {errors.deliverdForm.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="deliverdTo"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Deliverd To
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="select"
                            as="select"
                            isInvalid={errors.deliverdTo}
                            required
                            // disabled={mode === 'view'}
                            {...registerInput('deliverdTo', {
                              required: {
                                value: true,
                                message: 'Deliverd To is required',
                              },
                            })}
                          >
                            <option value="1">name</option>
                            <option value="2">name</option>
                            <option value="3">name</option>
                          </Form.Control>
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Deliverd To</span>
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
                          {errors.deliverdTo && (
                            <Form.Control.Feedback type="invalid">
                              {errors.deliverdTo.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="invoiceDate"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Invoice Date
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="date"
                            isInvalid={errors.invoiceDate}
                            required
                            // disabled={mode === 'view'}
                            {...registerInput('invoiceDate', {
                              required: {
                                value: true,
                                message: 'Invoice Date is required',
                              },
                              valueAsDate: true,
                            })}
                          />
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Invoice Date</span>
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
                          {errors.invoiceDate && (
                            <Form.Control.Feedback type="invalid">
                              {errors.invoiceDate.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                    <Col sm={6}>
                      <Form.Group
                        as={Row}
                        controlId="deliveryDate"
                        className="mt-2"
                      >
                        <Form.Label column sm={3}>
                          Delivery Date
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control
                            type="date"
                            isInvalid={errors.deliveryDate}
                            required
                            // disabled={mode === 'view'}
                            {...registerInput('deliveryDate', {
                              required: {
                                value: true,
                                message: 'Delivery Date is required',
                              },
                              valueAsDate: true,
                            })}
                          />
                          <OverlayTrigger
                            placement="bottom"
                            overlay={
                              <Tooltip>
                                <span className="muted">Delivery Date</span>
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
                          {errors.deliveryDate && (
                            <Form.Control.Feedback type="invalid">
                              {errors.deliveryDate.message}
                            </Form.Control.Feedback>
                          )}
                        </Col>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            <InvoiceDynamicForm />
          </>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CustomerInvoiceForm
