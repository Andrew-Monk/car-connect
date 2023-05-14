import React, {useEffect, useState} from "react"

function NewModelForm () {
    const [name, setName] = useState('')
    const [pictureUrl, setPictureUrl] = useState('')
    const [manufacturer, setManufacturer] = useState('')
    const [manufacturers, setManufacturers] = useState([])

		const fetchData = async () => {
	    const url = "http://localhost:8100/api/manufacturers/"


	    const response = await fetch(url)

	    if (response.ok) {
		    const data = await response.json()
		    setManufacturers(data.manufacturers)
	    }
    }

    const handlePictureUrlChange = (event) => {
        const value = event.target.value
        setPictureUrl(value)
    }

    const handleManufacturerChange = (event) => {
        const value = event.target.value
        setManufacturer(value)
    }

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()


        const data = {}

        data.name = name
        data.picture_url = pictureUrl
        data.manufacturer_id = manufacturer


        const modelsUrl = "http://localhost:8100/api/models/"
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'applications/json'
            }
        }

        const response = await fetch(modelsUrl, fetchConfig)
        if (response.ok) {
            const newModel = await response.json()

            setName('')
            setPictureUrl('')
            setManufacturer('')
        }
    }


		useEffect(() => {
			fetchData()
	}, [])


        return (
					<div className ="row">
						<div className ="offset-3 col-6">
							<div className ="shadow p-4 mt-4">
								<h1>Create a new Model</h1>
								<form onSubmit={handleSubmit}>
									<div className ="form-floating mb-3">
										<input value={name} onChange={handleNameChange} placeholder="Name" name='name' required type="text" id="name" className ="form-control"/>
										<label htmlFor="first_name">Model</label>
									</div>
									<div className ="form-floating mb-3">
										<input value={pictureUrl} onChange={handlePictureUrlChange} placeholder="Picture Url" name='picture url' required type="text" id="picture_url" className ="form-control"/>
										<label htmlFor="first_name">Picture Url</label>
									</div>
									<select value={manufacturer} onChange={handleManufacturerChange} required name="manufacturer" id='manufacturer' className ="form-select">
										<option value="">Choose a Manufacturer</option>
											{manufacturers.map(manufacturer => {
												return (
												<option key={manufacturer.id} value={manufacturer.id}>
													{manufacturer.name}
												</option>
												)
											})}
									</select>
									<div class="col-md-12 text-center">
							            <button className ="btn btn-primary mt-3">Create</button>
						            </div>
								</form>
							</div>
						</div>
					</div>
    )
}

export default NewModelForm
