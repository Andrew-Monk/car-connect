import React, { useEffect, useState } from 'react';

function ListAppointmentForm() {
  const [appointments, setAppointments] = useState([]);

  const fetchData = async () => {
    const url = "http://localhost:8080/api/appointments/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setAppointments(data.appointments);
    } else {
      console.log('Error fetching appointments');
    }
  };



  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Service Appointments</h1>
      <table className='table table-striped mx-auto'>
        <thead>
          <tr>
            <th>VIN</th>
            <th>VIP</th>
            <th>Customer Name</th>
            <th>Date and Time</th>
            <th>Technician Name</th>
            <th>Reason for Service</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.vin}</td>
              <td>{appointment.is_vip ? "Yes" : "No"}</td>
              <td>{appointment.customer_name}</td>
              <td>{new Date(appointment.date_time).toLocaleString()}</td>
              <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
              <td>{appointment.reason}</td>
              <td>{appointment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListAppointmentForm
