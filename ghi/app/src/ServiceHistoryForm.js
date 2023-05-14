import React, { useEffect, useState } from 'react';

function ServiceHistory() {
  const [appointments, setAppointments] = useState([]);
  const [fullAppointments, setFullAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments);
      setFullAppointments(data.appointments);
    } else {
      console.log('Error fetching appointments');
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm) {
      const filteredAppointments = fullAppointments.filter(appointment => appointment.vin === searchTerm);
      setAppointments(filteredAppointments);
    } else {
      setAppointments(fullAppointments);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Service History</h1>
      <form onSubmit={handleSearch}>
        <div className ="form-floating mb-3"></div>
        <input type="text" className ="form-control-sm" id="vin" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
        <button type="submit" className="btn btn-secondary btn-sm">Search</button>
      </form>
      <table className='table table-striped table-hover mx-auto'>
        <thead>
          <tr>
            <th>VIN</th>
            <th>Customer Name</th>
            <th>Date and Time</th>
            <th>Technician Name</th>
            <th>Reason for Service</th>
            <th>Status</th>
            <th>VIP</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.vin}</td>
              <td>{appointment.customer_name}</td>
              <td>{new Date(appointment.date_time).toLocaleString()}</td>
              <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.status}</td>
              <td>{appointment.is_vip ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServiceHistory;
