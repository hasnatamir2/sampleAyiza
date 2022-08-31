import { gql } from '@apollo/client'

export const GET_COMPANY_ALL_CODES = gql`
  query AllCompanyCodes {
    __typename
    nationalInsuranceNumbers {
      id
      companyCode
      objectStatus
      niNumber
    }
  }
`

export const GET_NI_NUMBERS_BY_COMPANY_CODE = gql`
  query GetNiNumbersByCompanyCode($companyCode: String!) {
    __typename
    nationalInsuranceNumbers(where: { companyCode: { eq: $companyCode } }) {
      id
      companyCode
      objectStatus
      niNumber
    }
  }
`

export const GET_NI_NUMBER_BY_ID = gql`
  query GetNiNumberById($id: String!) {
    __typename
    nationalInsuranceNumber(id: $id) {
      companyCode
      id
      niNumber
      objectStatus
    }
  }
`
