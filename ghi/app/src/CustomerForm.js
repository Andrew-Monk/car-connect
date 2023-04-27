import React, {useEffect, useState} from "react"

function CustomerForm () {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [address, setAddress] = useState('')
		const [phoneNumber, setPhoneNumber] = useState('')


    const handleFirstNameChange = (event) => {
        const value = event.target.value
        setFirstName(value)
    }

    const handleLastNameChange = (event) => {
        const value = event.target.value
        setLastName(value)
    }

    const handleAddressChange = (event) => {
        const value = event.target.value
        setAddress(value)
    }

		const handlePhoneNumberChange = (event) => {
			const value = event.target.value
			setPhoneNumber(value)
		}

    const handleSubmit = async (event) => {
        event.preventDefault()


        const data = {}

        data.first_name = firstName
        data.last_name = lastName
        data.address = address
				data.phone_number = phoneNumber

        console.log(data)

        const customersUrl = 'http://localhost:8090/api/customers/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'applications/json'
            }
        }

        const response = await fetch(customersUrl, fetchConfig)
        if (response.ok) {
            const newCustomer = await response.json()
            console.log(newCustomer)

            setFirstName('')
            setLastName('')
            setAddress('')
						setPhoneNumber('')
        }
    }


        useEffect(() => {
        }, [])


        return (
					<div className ="row">
						<div className ="offset-3 col-6">
							<div className ="shadow p-4 mt-4">
								<h1>Create a new customer</h1>
								<form onSubmit={handleSubmit}>
									<div className ="form-floating mb-3">
										<input value={firstName} onChange={handleFirstNameChange} placeholder="First Name" name=' first name' required type="text" id="first_name" className ="form-control"/>
										<label htmlFor="first_name">First Name</label>
									</div>
									<div className ="form-floating mb-3">
										<input value={lastName} onChange={handleLastNameChange} placeholder="Last Name" name='last name' required type="text" id="last_name" className ="form-control"/>
										<label htmlFor="last_name">Last Name</label>
									</div>
									<div className ="form-floating mb-3">
										<input value={address} onChange={handleAddressChange} placeholder="address" name = 'address' required type="text" id="address" className ="form-control"/>
										<label htmlFor="address">Address</label>
								</div>
								<div className ="form-floating mb-3">
										<input value={phoneNumber} onChange={handlePhoneNumberChange} placeholder="phone number" name = 'phone number' required type="tel" id="phone_number" className ="form-control"/>
										<label htmlFor="phone_number">Phone Number xxx-xxx-xxxx</label>
								</div>
									<button className ="btn btn-primary">Create</button>
								</form>
							</div>
						</div>
					</div>
    )
}

export default CustomerForm
