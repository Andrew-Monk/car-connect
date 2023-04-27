import React, {useEffect, useState} from "react"

function NewAutomobileForm () {
    const [color, setColor] = useState('')
    const [year, setYear] = useState('')
    const [vin, setVin] = useState('')
		const [model, setModel] = useState('')
    const [models, setModels] = useState([])

		const fetchData = async () => {
	    const url = "http://localhost:8100/api/models/"

	    const response = await fetch(url)

	    if (response.ok) {
		    const data = await response.json()
		    setModels(data.models)
	    }
    }

    const handleColorChange = (event) => {
        const value = event.target.value
        setColor(value)
    }

		const handleYearChange = (event) => {
			const value = event.target.value
			setYear(value)
		}

    const handleVinChange = (event) => {
        const value = event.target.value
        setVin(value)
    }

    const handleModelChange = (event) => {
        const value = event.target.value
        setModel(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()


        const data = {}

        data.color = color
        data.year = year
				data.vin = vin
        data.model_id = model

        console.log(data)

        const automobileUrl = "http://localhost:8100/api/automobiles/"
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'applications/json'
            }
        }

        const response = await fetch(automobileUrl, fetchConfig)
        if (response.ok) {
            const newAuto = await response.json()

            setColor('')
            setYear('')
            setVin('')
						setModel('')
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
										<input value={color} onChange={handleColorChange} placeholder="Color" name='color' required type="text" id="color" className ="form-control"/>
										<label htmlFor="first_name">Color</label>
									</div>
									<div className ="form-floating mb-3">
										<input value={year} onChange={handleYearChange} placeholder="year" name='year' required type="text" id="year" className ="form-control"/>
										<label htmlFor="first_name">Year</label>
									</div>
									<div className ="form-floating mb-3">
										<input value={vin} onChange={handleVinChange} placeholder="vin" name='vin' required type="text" id="vin" className ="form-control"/>
										<label htmlFor="first_name">Vin</label>
									</div>
									<select value={model} onChange={handleModelChange} required name="model" id='model_id' className ="form-select">
										<option value="">Choose a Model</option>
											{models.map(model => {
												return (
												<option key={model.id} value={model.id}>
													{model.name}
												</option>
												)
											})}
									</select>
									<div>
									<button className ="btn btn-primary">Create</button>
									</div>
								</form>
							</div>
						</div>
					</div>
    )
}

export default NewAutomobileForm
