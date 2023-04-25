import React, {useEffect, useState} from 'react'

function NewSaleForm () {
  const [vin, setVin] = useState('')
	const [salesperson, setSalesperson] = useState('')
	const [customer, setCustomer] = useState('')
	const [price, setPrice] = useState('')
	const [vins, setVins] = useState([])
	const [salespeople, setSalespeople] = useState([])
	const [customers, setCustomers] = useState([])


    const fetchData = async () => {
        const vinUrl = 'http://localhost:8100/api/automobiles/'
				const salespeopleUrl = 'http://localhost:8090/api/salespeople/'
				const customersUrl = 'http://localhost:8090/api/customers/'

        const response = await Promise.all([
					fetch(vinUrl),
					fetch(salespeopleUrl),
					fetch(customersUrl)
				])

        if (response.every(res => res.ok)) {
            const [vinData, salespeopleData, customersData] = await Promise.all(
							response.map(res => res.json())
						)
            setVins(vinData.vins || [])
						setSalespeople(salespeopleData.salespeople || [])
						setCustomers(customersData.customers)
						console.log(vinData, salespeopleData, customersData);
        }
      }

		const handleVinChange = (event) => {
			const value = event.target.value
			setVin(value)
		}

		const handleSalespersonChange = (event) => {
			const value = event.target.value
			setSalesperson(value)
		}

		const handleCustomerChange = (event) => {
			const value = event.target.value
			setCustomer(value)
		}

		const handlePriceChange = (event) => {
			const value = event.target.value
			setPrice(value)
		}


		const handleSubmit = async (event) => {
			event.preventDefault()


			const data = {}

			data.vin = vin
			data.salesperson = salesperson
			data.customer = customer
			data.price = price

			console.log(data)

			const saleUrl = 'http://localhost:8090/api/sales/';
  		const fetchConfig = {
    		method: "post",
    		body: JSON.stringify(data),
    		headers: {
      		'Content-Type': 'application/json',
    },
  };

  		const response = await fetch(saleUrl, fetchConfig);
  		if (response.ok) {
    		const newSale = await response.json();
    		console.log(newSale);

				setVin('')
				setSalesperson('')
				setCustomer('')
  }
}

      useEffect(() => {
        fetchData()
      }, [])

    return (
			<div className ="row">
			<div className ="offset-3 col-6">
				<div className ="shadow p-4 mt-4">
					<h1>New Sale</h1>
					<form onSubmit={handleSubmit}>
					<div className ="form-floating mb-3">
					<select value={vin} onChange={handleVinChange} required name="vin" id='vin' className ="form-select">
								<option value="">Choose a Vin</option>
								{vins.map(auto => {
									return (
										<option key={auto.vin} value={auto.vin}>
											{auto.vin}
										</option>
									)
								})}
							</select>
							</div>
							<div className ="form-floating mb-3">
							<select value={salesperson} onChange={handleSalespersonChange} required name="salesperson" id='salesperson' className ="form-select">
								<option value="">Choose a Salesperson</option>
								{salespeople.map(person => {
									return (
										<option key={person.first_name} value={person.id}>
											{person.first_name}
										</option>
									)
								})}
							</select>
							</div>
							<div className ="form-floating mb-3">
							<select value={customer} onChange={handleCustomerChange} required name="customer" id='customer' className ="form-select">
								<option value="">Choose a Customer</option>
								{customers.map(customer => {
									return (
										<option key={customer.first_name} value={customer.id}>
											{customer.first_name}
										</option>
									)
								})}
							</select>
							</div>
						<div className ="form-floating mb-3">
							<input value={price} onChange={handlePriceChange} placeholder="price" name='price' required type="integer" id="price" className ="form-control"/>
							<label htmlFor="price">Price</label>
						</div>
						<button className ="btn btn-primary">Create</button>
					</form>
				</div>
			</div>
		</div>
    )
}

export default NewSaleForm
