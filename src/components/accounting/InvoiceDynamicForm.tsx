import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'
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
import { useForm } from 'react-hook-form'
import { v4 as uuid } from 'uuid'

type InvoiceForm = {
  id: string
  product: string
  qty: number
  price: number
  unit: string
  tCode: string
  discount: number
  tax: number
  net: number
  total: number
  lineComment: string
  employee: string
  investmentCenter: string
  projectCode: string
  sbu: string
  property: string
  segment: string
  timeSheetId: string
  expenseClaim: string
}

const InvoiceDynamicForm = (props: any) => {
  const { data = [] } = props
  const [openTab, setOpenTab] = useState(null)
  const [formItems, setFormItems] = useState<InvoiceForm[]>([])
  const [showExtras, setShowExtras] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useForm()

  useEffect(() => {
    // setFormItems(data)
    // console.log(formItems)
  }, [formItems])

  useEffect(() => {
    // console.log(watch())
  }, [watch()])

  const handleTab = (id: any) => {
    openTab !== id ? setOpenTab(id) : setOpenTab(null)
  }

  const addNewItem = () => {
    setFormItems([
      ...formItems,
      {
        id: uuid(),
        product: '',
        qty: 1,
        price: 0,
        unit: '',
        tCode: '',
        discount: 0,
        tax: 0,
        net: 0,
        total: 0,
        lineComment: '',
        employee: '',
        investmentCenter: '',
        projectCode: '',
        sbu: '',
        property: '',
        segment: '',
        timeSheetId: '',
        expenseClaim: '',
      },
    ])
  }

  const removeItem = (id: any) => {
    let updatedItems = formItems.filter((item: any) => item.id !== id)
    setFormItems(updatedItems)
  }

  return (
    <>
      <Table size="sm" className="invoice-table mb-0 mt-5">
        <thead className="invoice-table-head">
          <tr>
            <th></th>
            <th>Item</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Unit</th>
            <th className="text-right">Price</th>
            <th>T.Code</th>
            <th className="text-right">Discount</th>
            <th className="text-right">Net</th>
            <th className="text-right">Tax</th>
            <th className="text-right">Total</th>
          </tr>
        </thead>
        <tbody className="invoice-table-body">
          {formItems.map((item: any, index: number) => (
            <>
              <tr
                onMouseEnter={() => setShowExtras(item.id)}
                onMouseLeave={() => setShowExtras(null)}
                key={item.id}
              >
                <td className="text-center">
                  <span
                    className="invoice-row-extra"
                    style={{
                      display: showExtras === item.id ? 'inline' : 'none',
                    }}
                  >
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="btn back-but"
                      style={{
                        fontSize: 8,
                        padding: 0,
                        margin: 0,
                        marginRight: 4,
                      }}
                    >
                      <FontAwesomeIcon
                        icon={'plus'}
                        onClick={() => handleTab(item.id)}
                        style={{ cursor: 'pointer', padding: 5 }}
                      />
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="btn back-but"
                      style={{ fontSize: 8, padding: 0, margin: 0 }}
                      onClick={() => removeItem(item.id)}
                    >
                      <FontAwesomeIcon
                        icon={'minus'}
                        onClick={() => handleTab(item.id)}
                        style={{ cursor: 'pointer', padding: 5 }}
                      />
                    </Button>
                  </span>
                  <FontAwesomeIcon
                    icon={openTab === item.id ? 'angle-down' : 'angle-right'}
                    onClick={() => handleTab(item.id)}
                    style={{ cursor: 'pointer', padding: 5 }}
                  />
                </td>
                <td>{index + 1}</td>
                <td>
                  <Form.Group controlId={`${item.id}.product`}>
                    <Form.Control
                      required
                      type="text"
                      className="clear-input  mb-0"
                      {...register(`${item.id}.product`, {
                        required: {
                          value: true,
                          message: 'Product is required',
                        },
                      })}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId={`${item.id}.qty`}>
                    <Form.Control
                      required
                      type="number"
                      className="clear-input  mb-0"
                      {...register(`${item.id}.qty`, {
                        required: {
                          value: true,
                          message: 'Qty is required',
                        },
                      })}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId={`${item.id}.unit`}>
                    <Form.Control
                      required
                      type="number"
                      className="clear-input  mb-0"
                      {...register(`${item.id}.unit`, {
                        required: {
                          value: true,
                          message: 'Unit is required',
                        },
                      })}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId={`${item.id}.price`}>
                    <Form.Control
                      required
                      style={{ textAlign: 'right' }}
                      type="text"
                      className="clear-input  mb-0"
                      {...register(`${item.id}.price`, {
                        required: {
                          value: true,
                          message: 'Price is required',
                        },
                        valueAsNumber: true,
                      })}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId={`${item.id}.tCode`}>
                    <Form.Control
                      style={{ textAlign: 'right' }}
                      type="text"
                      className="clear-input  mb-0"
                      {...register(`${item.id}.tCode`)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId={`${item.id}.discount`}>
                    <Form.Control
                      style={{ textAlign: 'right' }}
                      type="text"
                      className="clear-input  mb-0"
                      {...register(`${item.id}.discount`)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId={`${item.id}.net`}>
                    <Form.Control
                      style={{ textAlign: 'right' }}
                      type="text"
                      className="clear-input  mb-0"
                      {...register(`${item.id}.net`)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId={`${item.id}.tax`}>
                    <Form.Control
                      style={{ textAlign: 'right' }}
                      type="text"
                      className="clear-input  mb-0"
                      {...register(`${item.id}.tax`)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId={`${item.id}.total`}>
                    <Form.Control
                      style={{ textAlign: 'right' }}
                      type="text"
                      className="clear-input  mb-0"
                      {...register(`${item.id}.total`)}
                    />
                  </Form.Group>
                </td>
              </tr>
              <tr
                style={{ display: openTab === item.id ? 'table-row' : 'none' }}
                key={item.id}
              >
                <td colSpan={11}>
                  <Form>
                    <Row className="m-0 justify-content-around">
                      <Col sm={5}>
                        <Form.Group
                          as={Row}
                          controlId={`lineComment`}
                          className="mt-2"
                        >
                          <Form.Label column sm={3}>
                            Line Comment
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              className=""
                              {...register(`${item.id}.lineComment`)}
                            />
                          </Col>
                        </Form.Group>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <span className="muted">NI Number</span>
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
                        {/* {errors.NINumber && (
                        <Form.Control.Feedback type="invalid">
                          {errors.NINumber.message}
                        </Form.Control.Feedback>
                      )} */}
                      </Col>
                      <Col sm={5}></Col>
                      <Col sm={5}>
                        <Form.Group
                          as={Row}
                          controlId={`education`}
                          className="mt-2"
                        >
                          <Form.Label column sm={3}>
                            Education
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control
                              as="select"
                              type="select"
                              className=""
                              {...register(`${item.id}.education`)}
                            >
                              <option value="1">Select1</option>
                              <option value="2">Select2</option>
                              <option value="3">Select3</option>
                            </Form.Control>
                          </Col>
                        </Form.Group>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <span className="muted">NI Number</span>
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
                        {/* {errors.NINumber && (
                        <Form.Control.Feedback type="invalid">
                          {errors.NINumber.message}
                        </Form.Control.Feedback>
                      )} */}
                      </Col>
                      <Col sm={5}>
                        <Form.Group
                          as={Row}
                          controlId={`investmentCenter`}
                          className="mt-2"
                        >
                          <Form.Label column sm={3}>
                            Investment Center
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control
                              as="select"
                              type="select"
                              className=""
                              {...register(`${item.id}.investmentCenter`)}
                            >
                              <option value="1">Select1</option>
                              <option value="2">Select2</option>
                              <option value="3">Select3</option>
                            </Form.Control>
                          </Col>
                        </Form.Group>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <span className="muted">NI Number</span>
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
                        {/* {errors.NINumber && (
                        <Form.Control.Feedback type="invalid">
                          {errors.NINumber.message}
                        </Form.Control.Feedback>
                      )} */}
                      </Col>
                      <Col sm={5}>
                        <Form.Group
                          as={Row}
                          controlId={`projectCode`}
                          className="mt-2"
                        >
                          <Form.Label column sm={3}>
                            Project Code
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control
                              as="select"
                              type="select"
                              className=""
                              {...register(`${item.id}.projectCode`)}
                            >
                              <option value="1">Select1</option>
                              <option value="2">Select2</option>
                              <option value="3">Select3</option>
                            </Form.Control>
                          </Col>
                        </Form.Group>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <span className="muted">NI Number</span>
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
                        {/* {errors.NINumber && (
                        <Form.Control.Feedback type="invalid">
                          {errors.NINumber.message}
                        </Form.Control.Feedback>
                      )} */}
                      </Col>
                      <Col sm={5}>
                        <Form.Group as={Row} controlId={`sbu`} className="mt-2">
                          <Form.Label column sm={3}>
                            SBU
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control
                              as="select"
                              type="select"
                              className=""
                              {...register(`${item.id}.sbu`)}
                            >
                              <option value="1">Select1</option>
                              <option value="2">Select2</option>
                              <option value="3">Select3</option>
                            </Form.Control>
                          </Col>
                        </Form.Group>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <span className="muted">NI Number</span>
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
                        {/* {errors.NINumber && (
                        <Form.Control.Feedback type="invalid">
                          {errors.NINumber.message}
                        </Form.Control.Feedback>
                      )} */}
                      </Col>
                      <Col sm={5}>
                        <Form.Group
                          as={Row}
                          controlId={`property`}
                          className="mt-2"
                        >
                          <Form.Label column sm={3}>
                            Property
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control
                              as="select"
                              type="select"
                              className=""
                              {...register(`${item.id}.property`)}
                            >
                              <option value="1">Select1</option>
                              <option value="2">Select2</option>
                              <option value="3">Select3</option>
                            </Form.Control>
                          </Col>
                        </Form.Group>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <span className="muted">NI Number</span>
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
                        {/* {errors.NINumber && (
                        <Form.Control.Feedback type="invalid">
                          {errors.NINumber.message}
                        </Form.Control.Feedback>
                      )} */}
                      </Col>
                      <Col sm={5}>
                        <Form.Group
                          as={Row}
                          controlId={`segment`}
                          className="mt-2"
                        >
                          <Form.Label column sm={3}>
                            Segment
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control
                              as="select"
                              type="select"
                              className=""
                              {...register(`${item.id}.segment`)}
                            >
                              <option value="1">Select1</option>
                              <option value="2">Select2</option>
                              <option value="3">Select3</option>
                            </Form.Control>
                          </Col>
                        </Form.Group>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <span className="muted">NI Number</span>
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
                        {/* {errors.NINumber && (
                        <Form.Control.Feedback type="invalid">
                          {errors.NINumber.message}
                        </Form.Control.Feedback>
                      )} */}
                      </Col>
                      <Col sm={5}>
                        <Form.Group
                          as={Row}
                          controlId={`timesheetId`}
                          className="mt-2"
                        >
                          <Form.Label column sm={3}>
                            Timesheet Id
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control
                              type="text"
                              className=""
                              {...register(`${item.id}.timesheetId`)}
                            />
                          </Col>
                        </Form.Group>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <span className="muted">NI Number</span>
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
                        {/* {errors.NINumber && (
                        <Form.Control.Feedback type="invalid">
                          {errors.NINumber.message}
                        </Form.Control.Feedback>
                      )} */}
                      </Col>
                      <Col sm={5}>
                        <Form.Group
                          as={Row}
                          controlId={`expanseClaim`}
                          className="mt-2"
                        >
                          <Form.Label column sm={3}>
                            Expanse Claim
                          </Form.Label>
                          <Col sm={9}>
                            <Form.Control
                              type="text"
                              className=""
                              {...register(`${item.id}.expanseClaim`)}
                            />
                          </Col>
                        </Form.Group>
                        <OverlayTrigger
                          placement="bottom"
                          overlay={
                            <Tooltip>
                              <span className="muted">NI Number</span>
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
                        {/* {errors.NINumber && (
                        <Form.Control.Feedback type="invalid">
                          {errors.NINumber.message}
                        </Form.Control.Feedback>
                      )} */}
                      </Col>
                    </Row>
                  </Form>
                </td>
              </tr>
            </>
          ))}
          <tr>
            <td colSpan={3} className="border-0 pt-2 pb-3">
              <Button
                // variant="outline-primary"
                className="btn-blue"
                onClick={addNewItem}
              >
                Add New
              </Button>
            </td>
          </tr>
          <tr className="invoice-table-total-row">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
            <td>0.00</td>
          </tr>
        </tbody>
      </Table>
      <div></div>
    </>
  )
}

export default InvoiceDynamicForm
