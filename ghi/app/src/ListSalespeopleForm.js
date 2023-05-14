import { useEffect, useState } from 'react'

function SalespeopleList () {
    const [salespeople, setSalespeople] = useState([])

    const fetchData = async () => {
	    const url = "http://localhost:8090/api/salespeople/"

	    const response = await fetch(url)

	    if (response.ok) {
		    const data = await response.json()
		    setSalespeople(data.salespeople)
	    } else {
		    console.log('its not working')
	    }
    }

    async function handleDelete(personId, event) {
        event.preventDefault()
        const response = await fetch(`http://localhost:8090/api/salespeople/${personId}`, {method: 'delete'} )
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div className="px-4 py-5 my-5 text-center">
		<h1 className="display-5 fw-bold">Check Out Our Salespeople</h1>
		<div className="col-lg-6 mx-auto">
			<p className="lead mb-4">
				Our Highly Trained Staff
			</p>
		</div>
		<table className="table table-striped table-hover mx-auto">
			<thead>
				<tr key='info'>
					<th>Employee ID</th>
					<th>First Name</th>
					<th>Last Name</th>
				</tr>
				</thead>
			<tbody>
                {salespeople.map(person => {
                    return (
                    <tr key={person.id}>
                        <td>{person.employee_id}</td>
                        <td>{person.first_name}</td>
                        <td>{person.last_name}</td>
                        <td>
							<button onClick={ (event) => {handleDelete(person.id, event)}} className="btn btn-danger btn-sm">Delete</button>
						</td>
					</tr>
                    )
                    })}
			</tbody>
		</table>
	</div>
    )
}

export default SalespeopleList
