import React, { useEffect, useState } from 'react';

function ListAppointmentForm() {
  const [appointments, setAppointments] = useState([]);

  const handleCancelAppointment = async (event) => {
    event.preventDefault();
    const appointmentId = event.target.value;
    const cancelUrl = `http://localhost:8080/api/appointments/${appointmentId}/cancel/`;

      const fetchConfig = {
    method: 'put',
    };
    await fetch (cancelUrl, fetchConfig)

    setAppointments(appointments.filter(appointment => appointment.id !== parseInt(appointmentId)))
  }

    const handleFinishAppointment = async (event) => {
    event.preventDefault();
    const appointmentId = event.target.value;
    const finishUrl = `http://localhost:8080/api/appointments/${appointmentId}/cancel/`;

      const fetchConfig = {
    method: 'put',
    };
    await fetch (finishUrl, fetchConfig)

    setAppointments(appointments.filter(appointment => appointment.id !== parseInt(appointmentId)))
  }


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
      <table className='table table-striped table-hover mx-auto'>
        <thead>
          <tr>
            <th>VIN</th>
            <th>VIP</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Time</th>
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
              <td>{new Date(appointment.date_time).toLocaleDateString('en-US')}</td>
              <td>{new Date(appointment.date_time).toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', hour12: true})}</td>
              <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
              <td>{appointment.reason}</td>
              <td>
                <button onClick={handleFinishAppointment} value={appointment.id} className="btn btn-success btn-sm">Finish</button>
                <button onClick={handleCancelAppointment} value={appointment.id} className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListAppointmentForm
