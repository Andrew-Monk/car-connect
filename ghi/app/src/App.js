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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
