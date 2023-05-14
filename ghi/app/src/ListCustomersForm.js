import { useEffect, useState } from 'react'

function CustomersList () {
    const [customers, setCustomers] = useState([])

    const fetchData = async () => {
	    const url = "http://localhost:8090/api/customers/"

	    const response = await fetch(url)

	    if (response.ok) {
		    const data = await response.json()
		    setCustomers(data.customers)
	    } else {
		    console.log('its not working')
	    }
    }

    async function handleDelete(customerId, event) {
        event.preventDefault()
        const response = await fetch(`http://localhost:8090/api/customers/${customerId}`, {method: 'delete'} )
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div className="px-4 py-5 my-5 text-center">
		<h1 className="display-5 fw-bold">Check Out Our Loyal Customers:</h1>
		<div className="col-lg-6 mx-auto">
			<p className="lead mb-4">
				Become a VIP member today!
			</p>
		</div>
		<table className="table table-striped table-hover mx-auto">
			<thead>
				<tr key='info'>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Phone Number</th>
                    <th>Address</th>
				</tr>
				</thead>
			<tbody>
                {customers.map(customer => {
                    return (
                    <tr key={customer.id}>
                        <td>{customer.first_name}</td>
                        <td>{customer.last_name}</td>
                        <td>{customer.phone_number}</td>
                        <td>{customer.address}</td>
                        <td>
							<button onClick={ (event) => {handleDelete(customer.id, event)}}>Delete</button>
						</td>
					</tr>
                    )
                    })}
			</tbody>
		</table>
	</div>
    )
}

export default CustomersList
