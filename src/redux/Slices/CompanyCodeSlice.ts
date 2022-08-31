import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface CompanyCode {
  id: string
  businessName: string
  businessType: string
  industry: string
  country: string
  currency: string
  timezone: any
  financialYear: any
  calculateVAT: boolean
}

interface CompanyCodeState {
  companies: CompanyCode[]
  isLoading: boolean
}

const initialState: CompanyCodeState = {
  companies: [],

  isLoading: false,
}

export const CompanyCodeSlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<any>) => {
      state.companies.push(action.payload)
    },
    resetValues: (state) => {
      state.companies = []
    },
    deleteCompanyCode: (state, action: PayloadAction<any>) => {
      state.companies = state.companies.filter(
        (company) => !action.payload.includes(company.id)
      )
    },
    updateCompanyCode: (state, action: PayloadAction<any>) => {
      state.companies = state.companies.map((company) => {
        if (company.id === action.payload.id) {
          return action.payload
        }
        return company
      })
    },
  }
})

export const { setValues, resetValues, updateCompanyCode, deleteCompanyCode } = CompanyCodeSlice.actions
export default CompanyCodeSlice.reducer
