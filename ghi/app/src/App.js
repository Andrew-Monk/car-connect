import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import SalespersonForm from './SalespersonForm'
import ListSalespeopleForm from './ListSalespeopleForm'
import CustomerForm from './CustomerForm';
import ListCustomerForm from './ListCustomersForm'
import NewSaleForm from './NewSaleForm'

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
          </Route>
          <Route path="customers">
            <Route path="create" element={<CustomerForm />} />
            <Route path="list" element={<ListCustomerForm />} />
          </Route>
          <Route path="sales">
            <Route path="new" element={<NewSaleForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
