import { useEffect, useState } from 'react'

function SalesList () {
    const [sales, setSales] = useState([])

    const fetchData = async () => {
	    const url = "http://localhost:8090/api/sales/"
	    const response = await fetch(url)

	    if (response.ok) {
		    const data = await response.json()
		    setSales(data.sales)
	    } else {
		    console.log('its not working')
	    }
    }

    async function handleDelete(saleId, event) {
        event.preventDefault()
        const response = await fetch(`http://localhost:8090/api/sales/${saleId}`, {method: 'delete'} )
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div className="px-4 py-5 my-5 text-center">
		<h1 className="display-5 fw-bold">All our Sales</h1>
		<div className="col-lg-6 mx-auto">
			<p className="lead mb-4">
				Our Happy Customers and Loyal Salespeople
			</p>
		</div>
		<table className="table table-striped mx-auto">
			<thead>
				<tr key='info'>
					<th>Salesperson Employee ID</th>
					<th>Salesperson Name</th>
					<th>Customer</th>
            <th>VIN</th>
            <th>Price</th>
					</tr>
					</thead>
					<tbody>
            {sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td>{sale.salesperson.employee_id}</td>
                  <td>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                  <td>{sale.customer.first_name} {sale.customer.last_name}</td>
									<td>{sale.automobile.vin}</td>
									<td>${sale.price}</td>
                  <td>
										<button onClick={ (event) => {handleDelete(sale.id, event)}}>Delete</button>
									</td>
								</tr>
                )
            })}
			</tbody>
		</table>
	</div>
    )
}

export default SalesList
