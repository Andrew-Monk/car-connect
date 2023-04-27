import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Nav from './Nav';
import CreateAppointmentForm from './CreateAppointmentForm'
import ListTechnicianForm from './ListTechnicianForm'
import ListAppointmentForm from './ListServiceForm'
import ServiceHistoryForm from './ServiceHistoryForm'
import CreateTechnicianForm from './CreateTechnicianForm'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="appointments">
          <Route path="create" element={<CreateAppointmentForm />} />
            <Route path="list" element={<ListAppointmentForm />} />
            <Route path="history" element={<ServiceHistoryForm />} />
          </Route>
          <Route path="technicians">
            <Route path='list' element={<ListTechnicianForm />} />
            <Route path='create' element={<CreateTechnicianForm />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
