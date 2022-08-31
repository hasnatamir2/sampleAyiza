import { gql } from '@apollo/client'

export const TENANTS = gql`
  query Tenants {
    tenants {
      id
      isLockedForAdmin
      name
      status
      owner
      type
      modifiedBy
      createdBy
      createdAt
    }
  }
`
export const TENANT = gql`
  query Tenant($id: String!) {
    __typename
    tenant(id: $id) {
      id
      createdBy
      isLockedForAdmin
      modifiedBy
      name
      type
      status
      owner
    }
  }
`
