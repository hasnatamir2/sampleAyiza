import { gql } from '@apollo/client'

export const CREATE_INCOME_TAX_SELF_EMPLOYMENT = gql`
  mutation MyMutation(
    $niNumber: String!
    $businessId: String!
    $periodFromDate: Date!
    $periodToDate: Date!
    $selfAssessmentType: SelfAssessmentType!
    $adminCostsAmount: Decimal!
    $adminCostsDisallowableAmount: Decimal!
    $costOfGoodsBoughtDisallowableAmount: Decimal!
    $costOfGoodsBoughtAmount: Decimal!
    $staffCostsAmount: Decimal!
    $staffCostsDisallowableAmount: Decimal!
    $travelCostsDisallowableAmount: Decimal!
    $travelCostsAmount: Decimal!
    $premisesRunningCostsAmount: Decimal!
    $premisesRunningCostsDisallowableAmount: Decimal!
    $maintenanceCostsDisallowableAmount: Decimal!
    $maintenanceCostsAmount: Decimal!
    $advertisingCostsDisallowableAmount: Decimal!
    $advertisingCostsAmount: Decimal!
    $businessEntertainmentCostsDisallowableAmount: Decimal!
    $businessEntertainmentCostsAmount: Decimal!
    $interestAmount: Decimal!
    $interestDisallowableAmount: Decimal!
    $financialChargesDisallowableAmount: Decimal!
    $financialChargesAmount: Decimal!
    $consolidatedExpensesAmount: Decimal!
    $incomeOtherAmount: Decimal!
    $incomeTurnoverAmount: Decimal!
    $companyCode: String!
  ) {
    __typename
    incomeTaxSelfEmploymentSelfAssessmentCreate(
      input: {
        niNumber: $niNumber
        businessId: $businessId
        periodFromDate: $periodFromDate
        periodToDate: $periodToDate
        selfAssessmentType: $selfAssessmentType
        adminCostsAmount: $adminCostsAmount
        adminCostsDisallowableAmount: $adminCostsDisallowableAmount
        costOfGoodsBoughtDisallowableAmount: $costOfGoodsBoughtDisallowableAmount
        costOfGoodsBoughtAmount: $costOfGoodsBoughtAmount
        staffCostsAmount: $staffCostsAmount
        staffCostsDisallowableAmount: $staffCostsDisallowableAmount
        travelCostsDisallowableAmount: $travelCostsDisallowableAmount
        travelCostsAmount: $travelCostsAmount
        premisesRunningCostsAmount: $premisesRunningCostsAmount
        premisesRunningCostsDisallowableAmount: $premisesRunningCostsDisallowableAmount
        maintenanceCostsDisallowableAmount: $maintenanceCostsDisallowableAmount
        maintenanceCostsAmount: $maintenanceCostsAmount
        advertisingCostsDisallowableAmount: $advertisingCostsDisallowableAmount
        advertisingCostsAmount: $advertisingCostsAmount
        businessEntertainmentCostsDisallowableAmount: $businessEntertainmentCostsDisallowableAmount
        businessEntertainmentCostsAmount: $businessEntertainmentCostsAmount
        interestAmount: $interestAmount
        interestDisallowableAmount: $interestDisallowableAmount
        financialChargesDisallowableAmount: $financialChargesDisallowableAmount
        financialChargesAmount: $financialChargesAmount
        consolidatedExpensesAmount: $consolidatedExpensesAmount
        incomeOtherAmount: $incomeOtherAmount
        incomeTurnoverAmount: $incomeTurnoverAmount
        companyCode: $companyCode
      }
    ) {
      incomeTaxSelfEmploymentSelfAssessment {
        id
        adminCostsAmount
      }
      errors {
        code
        message
        field
      }
    }
  }
`

export const CREATE_INCOME_TAX_PROPERTY = gql`
  mutation createIncomeTaxProperty(
    $niNumber: String!
    $companyCode: String!
    $businessId: String!
    $periodFromDate: Date!
    $periodToDate: Date!
    $selfAssessmentType: SelfAssessmentType!
    $consolidatedExpensesAmount: Decimal!
    $residentialFinancialCostAmount: Decimal!
    $broughtFwdResidentialFinancialCostAmount: Decimal!
    $costOfServicesAmount: Decimal!
    $financialCostsAmount: Decimal!
    $incomePremiumsOfLeaseGrantAmount: Decimal!
    $incomeRentAmount: Decimal!
    $incomeTaxDeductedAmount: Decimal!
    $otherExpensesAmount: Decimal!
    $otherPropertyIncomeAmount: Decimal!
    $premisesRunningCostsAmount: Decimal!
    $professionalFeesAmount: Decimal!
    $rarReliefClaimedAmount: Decimal!
    $rarRentReceivedAmount: Decimal!
    $repairsAndMaintenanceAmount: Decimal!
    $reversePremiumsAmount: Decimal!
    $travelCostsAmount: Decimal!
  ) {
    __typename
    incomeTaxPropertySelfAssessmentCreate(
      input: {
        companyCode: $companyCode
        niNumber: $niNumber
        businessId: $businessId
        periodFromDate: $periodFromDate
        periodToDate: $periodToDate
        selfAssessmentType: $selfAssessmentType
        consolidatedExpensesAmount: $consolidatedExpensesAmount
        residentialFinancialCostAmount: $residentialFinancialCostAmount
        broughtFwdResidentialFinancialCostAmount: $broughtFwdResidentialFinancialCostAmount
        costOfServicesAmount: $costOfServicesAmount
        financialCostsAmount: $financialCostsAmount
        incomePremiumsOfLeaseGrantAmount: $incomePremiumsOfLeaseGrantAmount
        incomeRentAmount: $incomeRentAmount
        incomeTaxDeductedAmount: $incomeTaxDeductedAmount
        otherExpensesAmount: $otherExpensesAmount
        otherPropertyIncomeAmount: $otherPropertyIncomeAmount
        premisesRunningCostsAmount: $premisesRunningCostsAmount
        professionalFeesAmount: $professionalFeesAmount
        rarReliefClaimedAmount: $rarReliefClaimedAmount
        rarRentReceivedAmount: $rarRentReceivedAmount
        repairsAndMaintenanceAmount: $repairsAndMaintenanceAmount
        reversePremiumsAmount: $reversePremiumsAmount
        travelCostsAmount: $travelCostsAmount
      }
    ) {
      incomeTaxPropertySelfAssessment {
        id
        businessId
        url
      }
    }
  }
`
