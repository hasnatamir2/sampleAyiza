import './styles/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/bootstrap.css'
import './styles/custom.css'

import { Routes, Route } from 'react-router-dom'
import GuestRoute from './routes/GuestRoute'

import LoginContainer from './containers/Auth/Login/LoginContainer'

// Home
import HomeContainer from './containers/Home/HomeContainer'

// Company Code
import CompanyCodeContainer from './containers/CompanyCode/CompanyCodeContainer'
import AddCompanyCodeContainer from './containers/CompanyCode/AddCompanyCodeContainer'

// Income Tax
import IncomeTaxContainer from './containers/IncomeTax/IncomeTaxContainer'
import IncomeTaxTimeline from './containers/IncomeTax/IncomeTaxTimeline'
import AddNiNumberForm from './components/incomeTax/AddNiNumberForm'

// Accounting
import ReceivablesContaniner from './containers/Accounting/ReceivablesContaniner'
import CustomerInvoice from './containers/Accounting/CustomerInvoiceContainer'

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginContainer />} />
      <Route path="/" element={<GuestRoute />}>
        <Route index element={<HomeContainer />} />
        <Route path="companyCode" element={<CompanyCodeContainer />} />
        <Route path="addCompanyCode" element={<AddCompanyCodeContainer />} />
        <Route path="incomeTax" element={<IncomeTaxTimeline />} />
        <Route path="niNumber" element={<IncomeTaxContainer />} />
        <Route path="addNiNumber" element={<AddNiNumberForm />} />
        <Route path="receivables" element={<ReceivablesContaniner />} />
        <Route path="customerInvoice" element={<CustomerInvoice />} />
      </Route>
      <Route path="/*" element={<HomeContainer />} />
    </Routes>
  )
}

export default App
