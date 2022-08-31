import { gql } from '@apollo/client'

export const GET_BUSINESS_DATA_BY_COMPANY_CODE = gql`
  query getBusinessDataByCompanyCode($companyCode: String!) {
    __typename
    ukBusinesses(where: { companyCode: { eq: $companyCode } }) {
      niNumber
      objectStatus
      tradingName
      businessType
      businessId
      id
      companyCode
    }
  }
`
