import React from 'react'
import Breadcrumbs from '../../components/common/Breadcrumb'
import CustomerInvoiceForm from '../../components/accounting/CustomerInvoiceForm'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'

const crumbs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Accounting',
    path: '/',
  },
  {
    name: 'Receivables',
    path: '/receivables',
  },
  {
    name: 'Customer Invoice',
    path: '/customerInvoice',
  },
]

const CustomerInvoice: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useForm()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const onSubmit = (data: any) => {
    console.log(data)
    navigate('/receivables')
  }

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <CustomerInvoiceForm
        formHookSubmit={handleSubmit}
        registerInput={register}
        errors={errors}
        isLoading={false}
        navigate={navigate}
        handleFormSubmit={onSubmit}
      />
    </>
  )
}

export default CustomerInvoice
