import { useState } from 'react'
import Breadcrumbs from '../../components/common/Breadcrumb'
import { useNavigate, useSearchParams } from 'react-router-dom'
import ReceivablesTable from '../../components/accounting/ReceivablesTable'
import ConfirmModal from '../../components/common/ConfirmModal'

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
]

function ReceivablesContaniner() {
  const navigate = useNavigate()

  const [page, setPage] = useState(1)
  const [show, setShow] = useState(false)
  const [pageSize, setPageSize] = useState(10)
  const [selectedId, setSelectedId] = useState<any>(null)
  const [selectedMultiId, setSelectedMultiId] = useState<any>([])
  const [search, setSearch] = useState('')

  const handleDelete = (id: number) => {
    setShow(true)
    setSelectedId(id)
  }

  const handleDeleteConfirm = () => {
    setShow(false)
    // navigate('/companyCode')
  }
  const handleEdit = (id: number) => {
    // navigate(`/addCompanyCode?mode=edit&id=${id}`)
  }

  const handleView = (id: number) => {
    // navigate(`/addCompanyCode?mode=view&id=${id}`)
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
        warningText={`Delete ?`}
        onOk={handleDeleteConfirm}
      />
      <Breadcrumbs crumbs={crumbs} />
      <ReceivablesTable
        navigate={navigate}
        data={[]}
        page={page}
        setPage={setPage}
        setPageSize={setPageSize}
        pageSize={pageSize}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleView={handleView}
        handleCopy={handleCopy}
        handleSelected={handleSelection}
        selectedMultiId={selectedMultiId}
        handleMultiDelete={handleMultiDelete}
        handleSearch={(e: any) => setSearch(e.target.value)}
        search={search}
      />
    </>
  )
}

export default ReceivablesContaniner
