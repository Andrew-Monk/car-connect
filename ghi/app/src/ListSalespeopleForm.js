import { useEffect, useState } from 'react';

function SalespeopleList () {
    const [salespeople, setSalespeople] = useState([])

    const fetchData = async () => {
	    const url = "http://localhost:8090/api/salespeople/";
	    console.log(url);

	    const response = await fetch(url);
	    console.log(response);

	    if (response.ok) {
		    const data = await response.json();
		    setSalespeople(data.salespeople)
	    } else {
		    console.log('its not working');
	    }
    }

    async function handleDelete(personId, event) {
        event.preventDefault()
        console.log("person to be deleted", personId)
        const response = await fetch(`http://localhost:8090/api/salespeople/${personId}`, {method: 'delete'} )
        console.log("delete respone", response)
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
		<table className="table table-striped mx-auto">
			<thead>
				<tr key='info'>
					<th key='id'>Employee ID</th>
					<th key='first_name'>First Name</th>
					<th key='last_name'>Last Name</th>
				</tr>
				</thead>
			<tbody>
                {salespeople.map(person => {
                    return (
                    <tr key={person.id}>
                        <td key='id'>{person.employee_id}</td>
                        <td key='first_name'>{person.first_name}</td>
                        <td key='last_name'>{person.last_name}</td>
                        <td>
							<button onClick={ (event) => {handleDelete(person.id, event)}}>Delete</button>
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
