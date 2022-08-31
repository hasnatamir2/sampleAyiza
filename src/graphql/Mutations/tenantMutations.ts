import { gql } from '@apollo/client'

export const CREATE_TENANT = gql`
  mutation tenantCreate(
    $isLockedForAdmin: Boolean!
    $name: String!
    $owner: String!
    $status: ObjectStatus!
    $type: TenantType!
  ) {
    __typename
    tenantCreate(
      input: {
        isLockedForAdmin: $isLockedForAdmin
        name: $name
        owner: $owner
        status: $status
        type: $type
      }
    ) {
      tenant {
        id
        name
        isLockedForAdmin
        owner
        status
        type
        modifiedBy
        createdBy
      }
    }
  }
`

export const DELETE_TENANT = gql`
  mutation tenantDelete($id: String!) {
    __typename
    tenantDelete(id: $id) {
      id
    }
  }
`

export const UPDATE_TENANT = gql`
  mutation tenantUpdate(
    $isLockedForAdmin: Boolean!
    $owner: String!
    $status: ObjectStatus!
    $type: TenantType!
    $id: String!
  ) {
    __typename
    tenantUpdate(
      input: {
        id: $id
        isLockedForAdmin: $isLockedForAdmin
        owner: $owner
        status: $status
        type: $type
      }
    ) {
      tenant {
        id
        name
        isLockedForAdmin
        owner
        status
        type
        modifiedBy
        createdBy
      }
    }
  }
`
