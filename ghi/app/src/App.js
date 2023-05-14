import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespersonForm from './NewSalespersonForm'
import ListSalespeopleForm from './ListSalespeopleForm'
import CustomerForm from './NewCustomerForm';
import ListCustomerForm from './ListCustomersForm'
import NewSaleForm from './NewSaleForm'
import ListSalesForm from './ListSalesForm'
import SalespersonHistoryForm from './SalespersonHistoryForm'
import NewManufacturerForm from './NewManufacturerForm';
import NewModelForm from './NewModelForm';
import NewAutomobileForm from './NewAutomobileForm';
import CreateAppointmentForm from './CreateAppointmentForm'
import ListTechnicianForm from './ListTechnicianForm'
import ListAppointmentForm from './ListAppointmentForm'
import ServiceHistoryForm from './ServiceHistoryForm'
import CreateTechnicianForm from './CreateTechnicianForm'
import ListManufacturersForm from './ListManufacturersForm'
import ListAutomobileForm from './ListAutomobileForm'
import ListModelForm from './ListModelForm'
import './index.css'



function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="salespeople">
            <Route path="create" element={<SalespersonForm />} />
            <Route path="list" element={<ListSalespeopleForm />} />
            <Route path="history" element={<SalespersonHistoryForm />} />
          </Route>
          <Route path="customers">
            <Route path="create" element={<CustomerForm />} />
            <Route path="list" element={<ListCustomerForm />} />
          </Route>
          <Route path="sales">
            <Route path="new" element={<NewSaleForm />} />
            <Route path="list" element={<ListSalesForm />} />
          </Route>
          <Route path="manufacturers">
            <Route path="create" element={<NewManufacturerForm />} />
          </Route>
          <Route path="models">
            <Route path="create" element={<NewModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route path="create" element={<NewAutomobileForm />} />
          </Route>
          <Route path="appointments">
            <Route path="create" element={<CreateAppointmentForm />} />
            <Route path="list" element={<ListAppointmentForm />} />
            <Route path="history" element={<ServiceHistoryForm />} />
          </Route>
          <Route path="technicians">
            <Route path='list' element={<ListTechnicianForm />} />
            <Route path='create' element={<CreateTechnicianForm />} />
          </Route>
          <Route path="manufacturers">
            <Route path="list" element={<ListManufacturersForm />} />
          </Route>
          <Route path="models">
            <Route path="list" element={<ListModelForm />} />
          </Route>
          <Route path="automobiles">
            <Route path="list" element={<ListAutomobileForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
