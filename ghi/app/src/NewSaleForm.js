import React, {useEffect, useState} from 'react'

function NewSaleForm () {
  const [automobile, setAutomobile] = useState('')
	const [salesperson, setSalesperson] = useState('')
	const [customer, setCustomer] = useState('')
	const [price, setPrice] = useState('')
	const [autos, setVins] = useState([])
	const [salespeople, setSalespeople] = useState([])
	const [customers, setCustomers] = useState([])


    const fetchData = async () => {
        const automobileUrl = 'http://localhost:8100/api/automobiles/'
				const salespeopleUrl = 'http://localhost:8090/api/salespeople/'
				const customersUrl = 'http://localhost:8090/api/customers/'

        const response = await Promise.all([
					fetch(automobileUrl),
					fetch(salespeopleUrl),
					fetch(customersUrl)
				])

        if (response.every(res => res.ok)) {
            const [automobileData, salespeopleData, customersData] = await Promise.all(
							response.map(res => res.json())
						)
            setVins(automobileData.autos)
						setSalespeople(salespeopleData.salespeople)
						setCustomers(customersData.customers)
        }
      }

		const handleAutomobileChange = (event) => {
			const value = event.target.value
			setAutomobile(value)
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

			data.automobile = automobile
			data.salesperson = salesperson
			data.customer = customer
			data.price = price


			const saleUrl = 'http://localhost:8090/api/sales/'
  		const fetchConfig = {
    		method: "post",
    		body: JSON.stringify(data),
    		headers: {
      		'Content-Type': 'application/json',
    },
  };

  		const response = await fetch(saleUrl, fetchConfig)
  		if (response.ok) {
    		const newSale = await response.json()

				setAutomobile('')
				setSalesperson('')
				setCustomer('')
				setPrice('')
  }
			const autoUrl = `http://localhost:8100/api/automobiles/${automobile}/`
			const soldAuto = await fetch(autoUrl)
			if (soldAuto.ok) {
				const auto = await soldAuto.json()
				auto.sold = true
				const putConfig = {
					method: 'put',
					body: JSON.stringify(auto),
					headers: {
						'Content-Type': 'application/json',
					}
				}
				const putResponse = await fetch(autoUrl, putConfig)
				if (putResponse.ok) {
				}}
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
					<select value={automobile} onChange={handleAutomobileChange} required name="vin" id='vin' className ="form-select">
								<option value="">Choose a Vin</option>
								{autos.filter(auto => !auto.sold).map(auto => (
									<option key={auto.vin} value={auto.vin}>
									{auto.vin}
								</option>
							))}
							</select>
							</div>
							<div className ="form-floating mb-3">
							<select value={salesperson} onChange={handleSalespersonChange} required name="salesperson" id='salesperson' className ="form-select">
								<option value="">Choose a Salesperson</option>
								{salespeople.map(person => {
									return (
										<option key={person.first_name} value={person.id}>
											{person.first_name} {person.last_name}
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
											{customer.first_name} {customer.last_name}
										</option>
									)
								})}
							</select>
							</div>
						<div className ="form-floating mb-3">
							<input value={price} onChange={handlePriceChange} placeholder="price" name='price' required type="string" id="price" className ="form-control"/>
							<label htmlFor="price">Price</label>
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

export default NewSaleForm
