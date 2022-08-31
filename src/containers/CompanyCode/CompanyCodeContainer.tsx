import React, { useState } from 'react'
import CompanyTable from '../../components/companyCode/CompanyTable'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Breadcrumbs from '../../components/common/Breadcrumb'
import ConfirmModal from '../../components/common/ConfirmModal'
import { deleteCompanyCode } from '../../redux/Slices/CompanyCodeSlice'

const crumbs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Company Codes',
    path: '/companyCode',
  },
]

const CompanyCodeContainer: React.FC = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)
  const [show, setShow] = useState(false)
  const [pageSize, setPageSize] = useState(10)
  const [selectedId, setSelectedId] = useState<any>(null)
  const [selectedMultiId, setSelectedMultiId] = useState<any>([])
  const [search, setSearch] = useState('')

  const { companies, isLoading } = useSelector(
    (state: any) => state.companyCode
  )

  const handlePageChange = (event: any) => {
    const { value } = event.target
    setPage(value)
  }

  const handleDelete = (id: number) => {
    setShow(true)
    setSelectedId(id)
  }

  const handleDeleteConfirm = () => {
    setShow(false)
    dispatch(deleteCompanyCode(selectedId))
    navigate('/companyCode')
  }

  const handleEdit = (id: number) => {
    navigate(`/addCompanyCode?mode=edit&id=${id}`)
  }

  const handleView = (id: number) => {
    navigate(`/addCompanyCode?mode=view&id=${id}`)
  }

  const handleCopy = (company: any) => {
    var textArea = document.createElement('textarea')
    textArea.value = company

    // Avoid scrolling to bottom
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.position = 'fixed'

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    document.body.removeChild(textArea)
    navigator.clipboard.writeText(JSON.stringify(company))
  }

  const handleMultiDelete = () => {
    dispatch(deleteCompanyCode(selectedMultiId))
    setSelectedMultiId([])
  }

  const handleSelection = (id: number) => {
    if (selectedMultiId.includes(id)) {
      setSelectedMultiId(selectedMultiId.filter((item: any) => item !== id))
    } else {
      setSelectedMultiId([...selectedMultiId, id])
    }
  }

  return (
    <>
      <ConfirmModal
        show={show}
        onCancel={() => setShow(false)}
        warningText={`Delete company code ?`}
        onOk={handleDeleteConfirm}
      />
      <Breadcrumbs crumbs={crumbs} />
      <CompanyTable
        companies={companies}
        isLoading={isLoading}
        Navigate={navigate}
        setPage={handlePageChange}
        page={page}
        setPageSize={setPageSize}
        pageSize={pageSize}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleView={handleView}
        handleCopy={handleCopy}
        handleSelected={handleSelection}
        selectedMultiId={selectedMultiId}
        handleMultiDelete={handleMultiDelete}
        handleSearch={(e:any) => setSearch(e.target.value)}
        search={search}
      />
    </>
  )
}

export default CompanyCodeContainer
