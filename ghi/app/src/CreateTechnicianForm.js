import React, {useEffect, useState} from "react"

function CreateTechnicianForm () {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [employeeId, setEmployeeId] = useState('')


    const handleFirstNameChange = (event) => {
        const value = event.target.value
        setFirstName(value)
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value
        setLastName(value)
    }

    const handleEmployeeIdChange = (event) => {
        const value = event.target.value
        setEmployeeId(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()


        const data = {}

        data.first_name = firstName
        data.last_name = lastName
        data.employee_id = employeeId

        const technicianUrl = 'http://localhost:8080/api/technicians/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'applications/json'
            }
        }

        const response = await fetch(technicianUrl, fetchConfig)
        if (response.ok) {
            const newTechnician = await response.json()

            setFirstName('')
            setLastName('')
            setEmployeeId('')
        }
    }


        useEffect(() => {

        }, [])


        return (
					<div className ="row">
			<div className ="offset-3 col-6">
				<div className ="shadow p-4 mt-4">
					<h1>Create a new technician</h1>
					<form onSubmit={handleSubmit}>
						<div className ="form-floating mb-3">
							<input value={firstName} onChange={handleFirstNameChange} placeholder="First Name" name=' first name' required type="text" id="first_name" className ="form-control"/>
							<label htmlFor="name">First Name</label>
						</div>
						<div className ="form-floating mb-3">
							<input value={lastName} onChange={handleLastNameChange} placeholder="Last Name" name='last name' required type="text" id="last_name" className ="form-control"/>
							<label htmlFor="starts">Last Name</label>
						</div>
						<div className ="form-floating mb-3">
							<input value={employeeId} onChange={handleEmployeeIdChange} placeholder="employee id" name = 'employee id' required type="text" id="employee_id" className ="form-control"/>
							<label htmlFor="ends">Employee Id</label>
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

export default CreateTechnicianForm
