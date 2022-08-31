import { useEffect, useState } from 'react'
import IncomeTaxTable from '../../components/incomeTax/IncomeTaxTable'
import Breadcrumbs from '../../components/common/Breadcrumb'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client'
import {
  GET_COMPANY_ALL_CODES,
  GET_NI_NUMBERS_BY_COMPANY_CODE,
} from '../../graphql/Queries/niNumberQueries'
import { DELETE_NI_NUMBER } from '../../graphql/Mutations/niNumberMutations'
import { toast } from 'react-toastify'
import ConfirmModal from '../../components/common/ConfirmModal'

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
    name: 'NI Number',
    path: '/niNumber',
  },
]

const IncomeTaxContainer = (props: any) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [companyCode, setCompanyCode] = useState('')
  const [businessData, setBusinessData] = useState([])
  const [companyCodes, setCompanyCodes] = useState([])
  const [show, setShow] = useState(false)
  const [selectedId, setSelectedId] = useState<any>(null)

  const {
    error: companyCodesError,
    loading: companyCodesLoading,
    data: companyCodesdata,
    refetch,
  } = useQuery(GET_COMPANY_ALL_CODES)

  const {
    data,
    error,
    loading,
    refetch: refetchNiNumbers,
  } = useQuery(GET_NI_NUMBERS_BY_COMPANY_CODE, {
    variables: { companyCode },
    skip: !companyCode,
    errorPolicy: 'ignore',
  })
  const [deleteNiNumber, { error: deleteError }] = useMutation(DELETE_NI_NUMBER)

  useEffect(() => {
    if (data) {
      setBusinessData(data.nationalInsuranceNumbers)
    }
    if (error) {
      toast.error(error.message)
    }
  }, [data, error, loading])

  useEffect(() => {
    if (companyCodesdata) {
      setCompanyCodes(companyCodesdata.nationalInsuranceNumbers)
      if (!companyCode) {
        setCompanyCode(companyCodesdata.nationalInsuranceNumbers[0].companyCode)
      }
    }
  }, [companyCodesdata, companyCodesError, companyCodesLoading])

  const getBusinessNames = () => {
    navigate('/niNumber?mode=data')
  }

  const handleDeleteNiNumber = (id: string) => {
    setShow(true)
    setSelectedId(id)
  }

  const handleDeleteConfirm = () => {
    deleteNiNumber({
      variables: { id: selectedId },
    })
      .then(() => {
        setShow(false)
        toast.success('National Insurance Number deleted successfully')
        refetch()
        refetchNiNumbers()
      })
      .catch((err) => {
        setShow(false)
        toast.error(err.message)
      })
  }

  const handleNiNumberSave = () => {
    navigate('/businessData?code=' + companyCode)
  }

  return (
    <>
      <ConfirmModal
        show={show}
        onCancel={() => setShow(false)}
        warningText={`Confirm Delete ?`}
        onOk={handleDeleteConfirm}
      />
      <Breadcrumbs crumbs={crumbs} />
      <IncomeTaxTable
        navigate={navigate}
        getBusinessNames={getBusinessNames}
        companyCode={companyCode}
        setCompanyCode={setCompanyCode}
        businessData={businessData}
        companyCodes={companyCodes}
        handleDeleteNiNumber={handleDeleteNiNumber}
        handleNiNumberSave={handleNiNumberSave}
      />
    </>
  )
}

export default IncomeTaxContainer
