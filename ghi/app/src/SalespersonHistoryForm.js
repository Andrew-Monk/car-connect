import { useEffect, useState } from 'react';

function SalespersonHistory () {
    const [salesperson, setSalesperson] = useState('')
		const [salespeople, setSalespeople] = useState([])
		const [sales, setSales] = useState([])
		const [filteredSales, setFilteredSales] = useState([])

    const fetchData = async () => {
			const salesUrl = 'http://localhost:8090/api/sales/'
			const salespeopleUrl = 'http://localhost:8090/api/salespeople/'

			const response = await Promise.all([
				fetch(salesUrl),
				fetch(salespeopleUrl),
			])

			if (response.every(res => res.ok)) {
					const [salesData, salespeopleData] = await Promise.all(
						response.map(res => res.json())
					)
					setSales(salesData.sales)
					setSalespeople(salespeopleData.salespeople)
					console.log(salesData.sales);
			}
		}

		const handleSalespeopleChange = (event) => {
			const value = event.target.value
			setSalesperson(value)
		}

		const handleSubmit = async (event) => {
			event.preventDefault()
		}


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="px-4 py-5 my-5 text-center">
					<h1 className="display-5 fw-bold">Salesperson History</h1>
					<div className="col-lg-6 mx-auto">
					</div>
					<form onSubmit={handleSubmit}>
					<div className ="form-floating mb-3">
					<select value={salesperson} onChange={handleSalespeopleChange} required name="salespeople" id='salespeople' className ="form-select">
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
					</form>
					{salesperson && (
						<table className="table table-striped mx-auto">
						<thead>
							<tr key='info'>
								<th key='salesperson'>Salesperson</th>
								<th key='customer'>Customer</th>
								<th key='vin'>VIN</th>
								<th key='price'>Price</th>
							</tr>
							</thead>
							<tbody>
								{sales.filter(sale => sale.salesperson.id === parseInt(salesperson))
									.map(filteredSale => (
										<tr key={filteredSale.id}>
											<td>{filteredSale.salesperson.first_name}</td>
											<td>{filteredSale.customer.first_name} {filteredSale.customer.last_name}</td>
											<td>{filteredSale.automobile.vin}</td>
											<td>${filteredSale.price}</td>
										</tr>
									))}
							</tbody>
					</table>
					)}
				</div>
    )
}

export default SalespersonHistory
