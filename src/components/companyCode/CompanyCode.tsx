import { Container } from 'react-bootstrap'
import CompanyTable from './CompanyTable'
import CompanyForm from './CompanyForm'

const CompanyCode = (props: any) => {
  const {
    handleFormSubmit,
    formHookSubmit,
    registerInput,
    errors,
    isLoading,
    navigate,
    disableMode,
  } = props

  return (
    <div className="py-2 px-4 d-flex justify-content-center">
      <CompanyForm
        handleFormSubmit={handleFormSubmit}
        formHookSubmit={formHookSubmit}
        registerInput={registerInput}
        errors={errors}
        isLoading={isLoading}
        navigate={navigate}
        disableMode={disableMode}
      />
    </div>
  )
}

export default CompanyCode
