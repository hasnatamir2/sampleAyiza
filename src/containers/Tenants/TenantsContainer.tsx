import { useEffect, useState } from 'react'
import Tenants from '../../components/tenants/Tenants'
import { useNavigate } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/client'
import { TENANTS } from '../../graphql/Queries/tenantQueries'
import { DELETE_TENANT } from '../../graphql/Mutations/tenantMutations'
import Breadcrumbs from '../../components/common/Breadcrumb'
import ConfirmModal from '../../components/common/ConfirmModal'

const crumbs = [
  {
    name: 'Admin',
    path: '/adminPanel',
  },
  {
    name: 'Tenants',
    path: '/adminPanel/tenants',
  },
]

const TenantsContainer = () => {
  const navigate = useNavigate()

  const [selectedId, setSelectedId] = useState<any>(null)
  const [selectedMultiId, setSelectedMultiId] = useState<any>([])
  const [show, setShow] = useState(false)
  const [tenants, setTenants] = useState<any>([])

  // GRAPHQL
  const { error, loading, data, refetch } = useQuery(TENANTS)
  const [deleteTenant, { error: deleteError }] = useMutation(DELETE_TENANT, {
    refetchQueries: [{ query: TENANTS }],
    errorPolicy: 'none',
  })

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (data) {
      setTenants(data.tenants)
    }
  }, [data, error, loading])

  useEffect(() => {
    if (deleteError) {
    }
  }, [deleteError])

  //
  //
  const handleDelete = (id: number) => {
    setShow(true)
    setSelectedId(id)
  }

  const handleDeleteConfirm = async () => {
    try {
      const data = await deleteTenant({
        variables: {
          id: selectedId,
        },
      })
      setShow(false)
    } catch (error) {
      setShow(false)
    }
  }

  const handleEdit = (id: number) => {
    navigate(`/adminPanel/addTenant?mode=edit&id=${id}`)
  }

  const handleView = (id: number) => {
    navigate(`/adminPanel/addTenant?mode=view&id=${id}`)
  }

  const handleCopy = (tenant: any) => {
    var textArea = document.createElement('textarea')
    textArea.value = tenant

    // Avoid scrolling to bottom
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.position = 'fixed'

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    document.body.removeChild(textArea)
    navigator.clipboard.writeText(JSON.stringify(tenant))
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
        warningText={`Delete tenant ${selectedId} ?`}
        onOk={handleDeleteConfirm}
      />
      <Breadcrumbs crumbs={crumbs} />
      <Tenants
        tenants={tenants || []}
        loading={loading}
        Navigate={navigate}
        handleSelected={handleSelection}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleView={handleView}
        handleCopy={handleCopy}
      />
    </>
  )
}

export default TenantsContainer
