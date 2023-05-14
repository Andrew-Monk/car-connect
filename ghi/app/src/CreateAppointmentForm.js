import React, {useEffect, useState} from 'react'


function CreateAppointmentForm () {
	const [customer, setCustomer] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [technicians, setTechnicians] = useState([])
	const [reason, setReason] = useState('')
	const [technician, setTechnician] = useState('')
	const [vin, setVin] = useState('')


    const fetchData = async () => {
				const techniciansUrl = 'http://localhost:8080/api/technicians/'
        const response = await fetch(techniciansUrl)


        if (response.ok) {
            const data = await response.json()

            setTechnicians(data.technician)
        }
      }

		const handleCustomerChange = (event) => {
			const value = event.target.value
			setCustomer(value)
		}

		const handleDateChange = (event) => {
			const value = event.target.value
			setDate(value)
			console.log(date)
		}

		const handleTimeChange = (event) => {
			const value = event.target.value
			setTime(value)
			console.log(time)
		}

		const handleReasonChange = (event) => {
			const value = event.target.value
			setReason(value)
		}

		const handleTechnicianChange = (event) => {
			const value = event.target.value
			setTechnician(value)
		}

		const handleVinChange = (event) => {
			const value = event.target.value
			setVin(value)
		}



		const handleSubmit = async (event) => {
			event.preventDefault()


			const data = {}


			data.vin = vin
			data.customer_name = customer
			data.date_time = date + " " + time
			data.reason = reason
			data.technician = technician
			const appointmentUrl = "http://localhost:8080/api/appointments/";
  			const fetchConfig = {
    		method: "post",
    		body: JSON.stringify(data),
    		headers: {
      		'Content-Type': 'application/json',
    },
  };

  		const response = await fetch(appointmentUrl, fetchConfig);
  		if (response.ok) {
    		const newAppointment = await response.json();
				setVin('')
				setCustomer('')
				setDate('')
				setTime('')
				setReason('')
				setTechnician('')
  }
}

      useEffect(() => {
        fetchData()
      }, [])

    return (
			<div className ="row">
			<div className ="offset-3 col-6">
				<div className ="shadow p-4 mt-4">
					<h1>Request a Service Appointment</h1>
					<form onSubmit={handleSubmit}>
					<div className ="form-floating mb-3">
						<div className ="form-floating mb-3">
							<input value={vin} onChange={handleVinChange} placeholder="vin" name='vin' required type="string" id="vin" className ="form-control"/>
							<label htmlFor="vin">VIN</label>
						</div>
							<div className ="form-floating mb-3">
								<input value={customer} onChange={handleCustomerChange} placeholder="customer" name='customer' required type="string" id="customer" className ="form-control"/>
								<label htmlFor="customer">Customer Name</label>
							</div>
							<div className ="form-floating mb-3">
								<input value={date} onChange={handleDateChange} placeholder="date" name='date' required type="date" id="date" className ="form-control"/>
								<label htmlFor="date">Date</label>
						  </div>
							<div className ="form-floating mb-3">
								<input value={time} onChange={handleTimeChange} placeholder="time" name='time' required type="time" id="time" className ="form-control"/>
								<label htmlFor="time">Time</label>
						  </div>
							<div className ="form-floating mb-3">
							<select value={technician} onChange={handleTechnicianChange} required name="technician" id='technician' className ="form-select">
								<option value="">Choose a Technician</option>
								{technicians.map(technician => {
									return (
										<option key={technician.id} value={technician.employee_id}>
											{technician.first_name} {technician.last_name}
										</option>
									)
								})}
							</select>
							</div>
						<div className ="form-floating mb-3">
							<input value={reason} onChange={handleReasonChange} placeholder="reason" name='reason' required type="string" id="reason" className ="form-control"/>
							<label htmlFor="reason">Reason</label>
						</div>
						</div>
						<div class="col-md-12 text-center">
							<button className ="btn btn-primary">Create</button>
						</div>
					</form>
				</div>
			</div>
		</div>
    )
}

export default CreateAppointmentForm
