import React, {useEffect, useState} from "react"

function NewManufacturerForm () {
    const [name, setName] = useState('')

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()


        const data = {}

        data.name = name

        console.log(data)

        const manufacturerUrl = 'http://localhost:8100/api/manufacturers/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'applications/json'
            }
        }

        const response = await fetch(manufacturerUrl, fetchConfig)
        if (response.ok) {
            const newCustomer = await response.json()
            console.log(newCustomer)

            setName('')
        }
    }


        useEffect(() => {
        }, [])


        return (
					<div className ="row">
						<div className ="offset-3 col-6">
							<div className ="shadow p-4 mt-4">
								<h1>Create a new Manufacturer</h1>
								<form onSubmit={handleSubmit}>
									<div className ="form-floating mb-3">
										<input value={name} onChange={handleNameChange} placeholder="First Name" name=' first name' required type="text" id="first_name" className ="form-control"/>
										<label htmlFor="first_name">Manufacturer</label>
									</div>
									<button className ="btn btn-primary">Create</button>
								</form>
							</div>
						</div>
					</div>
    )
}

export default NewManufacturerForm
