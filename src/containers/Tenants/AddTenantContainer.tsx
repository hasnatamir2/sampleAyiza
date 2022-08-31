import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Breadcrumbs from '../../components/common/Breadcrumb'
import TenantForm from '../../components/tenants/TenantsForm'
import { useMutation, useQuery } from '@apollo/client'
import {
  CREATE_TENANT,
  UPDATE_TENANT,
} from '../../graphql/Mutations/tenantMutations'
import { TENANT } from '../../graphql/Queries/tenantQueries'
import { toast } from 'react-toastify'

type TenantData = {
  isLockedForAdmin: boolean
  name: string
  status: string
  type: string
  owner: string
}

const crumbs = [
  {
    name: 'Admin',
    path: '/adminPanel',
  },
  {
    name: 'Tenants',
    path: '/adminPanel/tenants',
  },
  {
    name: 'Add Tenant',
    path: '/adminPanel/addTenant',
  },
]

const AddTenantContainer: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<TenantData>()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const mode = searchParams.get('mode')
  const id = searchParams.get('id')

  const [tenantCreate, { data, loading, error }] = useMutation(CREATE_TENANT)
  const [tenantUpdate, { data: updatedTenant }] = useMutation(UPDATE_TENANT, {
    refetchQueries: [{ query: TENANT, variables: { id } }],
    errorPolicy: 'ignore',
  })

  const { data: tenantData } = useQuery(TENANT, {
    variables: { id },
    skip: !id,
  })

  const [disableMode, setDisableMode] = useState(false)

  useEffect(() => {
    if (mode === 'view') {
      setDisableMode(true)
    } else if (mode === 'edit') {
      setDisableMode(false)
    }
  }, [])

  useEffect(() => {
    if (tenantData) {
      setValue('name', tenantData?.tenant?.name)
      setValue('status', tenantData?.tenant?.status)
      setValue('type', tenantData?.tenant?.type)
      setValue('owner', tenantData?.tenant?.owner)
      setValue('isLockedForAdmin', tenantData?.tenant?.isLockedForAdmin)
    }
  }, [tenantData])

  useEffect(() => {
    if (data) {
      toast.success('Tenant created successfully')
      navigate('/adminPanel/tenants')
    }
    if (error) {
      console.log(error)
    }
  }, [data, loading, error])

  useEffect(() => {
    if (updatedTenant) {
      toast.success('Tenant updated successfully')
      navigate('/adminPanel/tenants')
    }
    if (error) {
      console.log(error)
    }
  }, [updatedTenant])

  const handleFormSubmit = (values: any) => {
    if (mode === 'edit') {
      tenantUpdate({
        variables: {
          id,
          status: values.status,
          type: values.type,
          owner: values.owner,
          isLockedForAdmin: values.isLockedForAdmin,
        },
      })
    } else {
      tenantCreate({
        variables: {
          name: values.name,
          status: values.status,
          type: values.type,
          owner: values.owner,
          isLockedForAdmin: values.isLockedForAdmin,
        },
      })
    }
  }

  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <TenantForm
        handleFormSubmit={handleFormSubmit}
        formHookSubmit={handleSubmit}
        registerInput={register}
        errors={errors}
        navigate={navigate}
        disableMode={disableMode}
        mode={mode}
      />
    </>
  )
}

export default AddTenantContainer
