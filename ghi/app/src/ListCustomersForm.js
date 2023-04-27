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
		<h1 className="display-5 fw-bold">Check Out Our Loyal Customers</h1>
		<div className="col-lg-6 mx-auto">
			<p className="lead mb-4">
				Our Super Duper Cool Customers
			</p>
		</div>
		<table className="table table-striped mx-auto">
			<thead>
				<tr key='info'>
					<th key='first_name'>First Name</th>
					<th key='last_name'>Last Name</th>
					<th key='phone_number'>Phone Number</th>
                    <th key='address'>Address</th>
				</tr>
				</thead>
			<tbody>
                {customers.map(customer => {
                    return (
                    <tr key={customer.id}>
                        <td key='first_name'>{customer.first_name}</td>
                        <td key='last_name'>{customer.last_name}</td>
                        <td key='phone_number'>{customer.phone_number}</td>
                        <td key='address'>{customer.address}</td>
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
