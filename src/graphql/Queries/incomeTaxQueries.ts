import { gql } from '@apollo/client'

export const GET_INCOME_TAX_SELF_EMPLOYMENT = gql`
  query getIncomeTaxSelfEmployment($companyCode: String!) {
    incomeTaxSelfEmploymentSelfAssessments(
      where: { companyCode: { eq: $companyCode } }
    ) {
      id
      periodToDate
      niNumber
      periodFromDate
      objectStatus
      companyCode
      business {
        tradingName
        businessId
        businessType
      }
    }
  }
`
export const GET_INCOME_TAX_PROPERTY = gql`
  query getIncomeTaxProperty($companyCode: String!) {
    incomeTaxPropertySelfAssessments(
      where: { companyCode: { eq: $companyCode } }
    ) {
      id
      periodToDate
      niNumber
      periodFromDate
      objectStatus
      companyCode
      business {
        tradingName
        businessId
        businessType
      }
    }
  }
`
export const GET_INCOME_TAX_SELF_EMPLOYMENT_BY_ID = gql`
  query getIncomeTaxSelfEmploymentById($id: String!) {
    __typename
    incomeTaxSelfEmploymentSelfAssessment(id: $id) {
      adminCostsAmount
      adminCostsDisallowableAmount
      advertisingCostsAmount
      advertisingCostsDisallowableAmount
      badDebtAmount
      badDebtDisallowableAmount
      businessEntertainmentCostsAmount
      businessEntertainmentCostsDisallowableAmount
      companyCode
      businessId
      consolidatedExpensesAmount
      costOfGoodsBoughtDisallowableAmount
      costOfGoodsBoughtAmount
      createdAt
      createdBy
      depreciationAmount
      depreciationDisallowableAmount
      expensesOtherAmount
      expensesOtherDisallowableAmount
      financialChargesAmount
      financialChargesDisallowableAmount
      id
      incomeOtherAmount
      incomeTurnoverAmount
      interestAmount
      interestDisallowableAmount
      maintenanceCostsAmount
      maintenanceCostsDisallowableAmount
      modifiedAt
      modifiedBy
      url
      travelCostsDisallowableAmount
      travelCostsAmount
      staffCostsDisallowableAmount
      staffCostsAmount
      selfAssessmentType
      professionalFeesDisallowableAmount
      selfAssessmentStatus
      professionalFeesAmount
      premisesRunningCostsDisallowableAmount
      premisesRunningCostsAmount
      periodToDate
      periodId
      periodFromDate
      objectStatus
      niNumber
    }
  }
`

export const GET_INCOME_TAX_PROPERTY_BY_ID = gql`
  query getIncomeTaxPropertyById($id: String!) {
    __typename
    incomeTaxPropertySelfAssessment(id: $id) {
      broughtFwdResidentialFinancialCostAmount
      businessId
      companyCode
      consolidatedExpensesAmount
      costOfServicesAmount
      createdAt
      financialCostsAmount
      createdBy
      id
      incomePremiumsOfLeaseGrantAmount
      incomeRentAmount
      incomeTaxDeductedAmount
      modifiedAt
      modifiedBy
      objectStatus
      niNumber
      otherExpensesAmount
      otherPropertyIncomeAmount
      periodFromDate
      periodId
      periodToDate
      url
      selfAssessmentType
      travelCostsAmount
      selfAssessmentStatus
      reversePremiumsAmount
      residentialFinancialCostAmount
      repairsAndMaintenanceAmount
      rarRentReceivedAmount
      rarReliefClaimedAmount
      propertyCategory
      professionalFeesAmount
      premisesRunningCostsAmount
    }
  }
`
