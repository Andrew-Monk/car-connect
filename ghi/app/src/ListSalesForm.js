import { useEffect, useState } from 'react';

function SalesList () {
    const [sales, setSales] = useState([])

    const fetchData = async () => {
	    const url = "http://localhost:8090/api/sales/";
	    console.log(url);

	    const response = await fetch(url);
	    console.log(response);

	    if (response.ok) {
		    const data = await response.json();
				console.log(data)
		    setSales(data.sales)
	    } else {
		    console.log('its not working');
	    }
    }

    async function handleDelete(saleId, event) {
        event.preventDefault()
        console.log("sale to be deleted", saleId)
        const response = await fetch(`http://localhost:8090/api/sales/${saleId}`, {method: 'delete'} )
        console.log("delete respone", response)
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
					<th key='id'>Salesperson Employee ID</th>
					<th key='salesperson_name'>Salesperson Name</th>
					<th key='customer_name'>Customer</th>
            <th key='vin'>VIN</th>
            <th key='price'>Price</th>
					</tr>
					</thead>
					<tbody>
            {sales.map(sale => {
              return (
                <tr key={sale.id}>
                  <td key='id'>{sale.salesperson.employee_id}</td>
                  <td key='salesperson_name'>{sale.salesperson.first_name} {sale.salesperson.last_name}</td>
                  <td key='customer_name'>{sale.customer.first_name} {sale.customer.last_name}</td>
									<td key='vin'>{sale.automobile.vin}</td>
									<td key='price'>${sale.price}</td>
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