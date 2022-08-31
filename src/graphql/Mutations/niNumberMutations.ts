import { gql } from '@apollo/client'

export const CREATE_NI_NUMBER = gql`
  mutation createNiNumber($companyCode: String!, $niNumber: String!) {
    __typename
    nationalInsuranceNumberCreate(
      input: { companyCode: $companyCode, niNumber: $niNumber }
    ) {
      nationalInsuranceNumber {
        niNumber
        companyCode
        id
        objectStatus
      }
      errors {
        code
        field
        message
      }
    }
  }
`
export const UPDATE_NI_NUMBER = gql`
  mutation updateNiNumber($id: String!, $companyCode: String!) {
    __typename
    nationalInsuranceNumberUpdate(
      input: { id: $id, companyCode: $companyCode }
    ) {
      nationalInsuranceNumber {
        companyCode
        id
        niNumber
        objectStatus
        createdAt
      }
      errors {
        code
        field
        message
      }
    }
  }
`
export const DELETE_NI_NUMBER = gql`
  mutation deleteNiNumber($id: String!) {
    __typename
    nationalInsuranceNumberDelete(id: $id) {
      id
    }
  }
`
