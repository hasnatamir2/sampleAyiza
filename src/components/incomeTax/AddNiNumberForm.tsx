import { useEffect, useState } from 'react'
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
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Breadcrumbs from '../../components/common/Breadcrumb'
import { useMutation, useQuery } from '@apollo/client'
import {
  CREATE_NI_NUMBER,
  UPDATE_NI_NUMBER,
} from '../../graphql/Mutations/niNumberMutations'
import { toast } from 'react-toastify'
import { GET_NI_NUMBER_BY_ID } from '../../graphql/Queries/niNumberQueries'
import { GET_COMPANY_ALL_CODES } from '../../graphql/Queries/niNumberQueries'

const crumbs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Income Tax',
    path: '/incomeTax',
  },
  {
    name: 'Maintain NI Number',
    path: '/addNiNumber',
  },
]

const addNiNumberForm = (props: any) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [companyCodes, setCompanyCodes] = useState([])

  const id = searchParams.get('id')
  const {
    error: companyCodesError,
    loading: companyCodesLoading,
    data: companyCodesdata,
    refetch,
  } = useQuery(GET_COMPANY_ALL_CODES)
  const [niNumberCreate, { data, loading, error }] =
    useMutation(CREATE_NI_NUMBER)

  const [
    niNumberUpdate,
    { data: updateData, loading: updateLoading, error: updateError },
  ] = useMutation(UPDATE_NI_NUMBER)

  const {
    data: niNumberData,
    error: niNumberError,
    loading: niNumberLoading,
  } = useQuery(GET_NI_NUMBER_BY_ID, {
    variables: { id },
    skip: !id,
    errorPolicy: 'ignore',
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm()

  useEffect(() => {
    if (id) {
    }
  }, [id])

  useEffect(() => {
    if (niNumberData) {
      setValue('companyCode', niNumberData.nationalInsuranceNumber.companyCode)
      setValue('niNumber', niNumberData.nationalInsuranceNumber.niNumber)
    }
    if (error) {
      // toast.error(error.message)
    }
  }, [niNumberData, niNumberError, niNumberLoading])

  useEffect(() => {
    if (companyCodesdata) {
      setCompanyCodes(companyCodesdata.nationalInsuranceNumbers)
      const { companyCode } = getValues()
      if (!companyCode) {
        setValue(
          'companyCode',
          companyCodesdata.nationalInsuranceNumbers[0].companyCode
        )
      }
    }
  }, [companyCodesdata])

  const onSubmit = (data: any) => {
    if (id) {
      niNumberUpdate({
        variables: {
          id,
          companyCode: data.companyCode,
          // niNumber: data.niNumber,
        },
      })
        .then((res) => {
          toast.success('NI Number Updated Successfully')
          navigate('/niNumber')
        })
        .catch((err) => {
          console.log(err)
          toast.error('Failed to update NI Number')
        })
    } else {
      niNumberCreate({
        variables: {
          companyCode: data.companyCode,
          niNumber: data.niNumber,
        },
      })
        .then((res) => {
          toast.success('NI Number Added Successfully')
          navigate('/niNumber')
        })
        .catch((err) => {
          console.log(err)
          toast.error('Failed to add NI Number')
        })
    }
  }

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <div className="py-2 px-4 d-flex justify-content-center mb-5">
        <Card className="card-container">
          <Card.Header>
            <div className="card-header-content">
              <span>NI Number - Add</span>
              <div>
                <Button
                  type="submit"
                  onClick={() => navigate('/niNumber')}
                  className="btn back-but"
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  onClick={handleSubmit(onSubmit)}
                  className="btn save-but"
                >
                  Save
                </Button>
              </div>
            </div>
          </Card.Header>
          <Card.Body>
            <>
              <Row className="justify-content-center align-items-center">
                <Col sm={7}>
                  <Form
                    noValidate
                    //   validated={Object.keys(errors).length > 0}
                    className="center-form m-auto"
                    style={{ maxWidth: 750 }}
                    // onSubmit={handleSubmit(onSubmit)}
                  >
                    <Form.Group
                      as={Row}
                      controlId="businessName"
                      className="mt-2"
                    >
                      <Form.Label column sm={3}>
                        Company Code
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="select"
                          as="select"
                          required
                          // isInvalid={errors.businessName}
                          {...register('companyCode', {
                            required: {
                              value: true,
                              message: 'Company Code is required',
                            },
                            // deps: ['NINumber'],
                          })}
                        >
                          {companyCodes.map((item: any, index: number) => {
                            return (
                              <option key={index} value={item.companyCode}>
                                {item.companyCode}
                              </option>
                            )
                          })}
                        </Form.Control>
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
                        {errors.businessName && (
                          <Form.Control.Feedback type="invalid">
                            {/* {errors.businessName.message} */}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="NINumber" className="mt-2">
                      <Form.Label column sm={3}>
                        NI Number
                      </Form.Label>
                      <Col sm={8}>
                        <Form.Control
                          type="text"
                          required
                          // disabled={id ? true : false}
                          // isInvalid={errors.NINumber}
                          {...register('niNumber', {
                            required: {
                              value: true,
                              message: 'NI Number is required',
                            },
                            pattern: {
                              value: /^[a-z]{2}[0-9]{6}[a-z]{1}$/gim,
                              message: 'NI Number is invalid',
                            },
                          })}
                        />
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
                        {errors.niNumber && (
                          <Form.Control.Feedback type="invalid">
                            {/* {errors.niNumber.message} */}
                          </Form.Control.Feedback>
                        )}
                      </Col>
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default addNiNumberForm
