import React, { useEffect, useState } from 'react'
import CompanyCode from '../../components/companyCode/CompanyCode'
import {
  setValues,
  updateCompanyCode,
} from '../../redux/Slices/CompanyCodeSlice'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Breadcrumbs from '../../components/common/Breadcrumb'

type FormData = {
  businessName: string
  businessType: string
  industry: string
  country: string
  currency: string
  timezone: string
  financialYear: number
  calculateVAT: boolean
}

const crumbs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Company Codes',
    path: '/companyCode',
  },
  {
    name: 'Add Company Codes',
    path: '/addCompanyCode',
  },
]

const CompanyCodeContainer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>()

  const [disableMode, setDisableMode] = useState(false)

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode')
  const id = searchParams.get('id')

  const { companies, isLoading } = useSelector(
    (state: any) => state.companyCode
  )
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (mode === 'view') {
      setDisableMode(true)
    } else if (mode === 'edit') {
      setDisableMode(false)
    }
    let company = companies.find((company: any) => company.id === Number(id))
    if (company) {
      setValue('businessName', company.businessName)
      setValue('businessType', company.businessType)
      setValue('industry', company.industry)
      setValue('country', company.country)
      setValue('currency', company.currency)
      setValue('timezone', company.timezone)
      setValue('financialYear', company.financialYear)
      setValue('calculateVAT', company.calculateVAT)
    }
  }, [companies])

  
  const handleFormSubmit = (values: any) => {
    if (mode === 'edit') {
      dispatch(updateCompanyCode({ id: Number(id), ...values }))
      navigate('/companyCode')
    } else {
      let id = Math.floor(Math.random() * 10000)

      dispatch(setValues({ id, ...values }))
      navigate('/companyCode')
    }
  }


  return (
    <>
    <Breadcrumbs crumbs={crumbs} />
    <CompanyCode
      handleFormSubmit={handleFormSubmit}
      formHookSubmit={handleSubmit}
      registerInput={register}
      errors={errors}
      isLoading={isLoading}
      navigate={navigate}
      disableMode={disableMode}
    />
    </>
  )
}

export default CompanyCodeContainer
