import { useEffect, useState } from 'react';

function ListTechnicians () {
    const [technicians, setTechnicians] = useState([])

    const fetchData = async () => {
	    const url = "http://localhost:8080/api/technicians/";


	    const response = await fetch(url);


	    if (response.ok) {
		    const data = await response.json();
		    setTechnicians(data.technician)
	    } else {
		    console.log('its not working');
	    }
    }

    async function handleDelete(personId, event) {
        event.preventDefault()
        console.log("person to be deleted", personId)
        const response = await fetch(`http://localhost:8080/api/technicians/${personId}`, {method: 'delete'} )
        console.log("delete response", response)
        fetchData()
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div className="px-4 py-5 my-5 text-center">
		<h1 className="display-5 fw-bold">The Best Technicians in Town!</h1>
		<div className="col-lg-6 mx-auto">
			<p className="lead mb-4">
				Meet Our Highly Trained Staff!
			</p>
		</div>
		<table className="table table-striped mx-auto">
			<thead>
				<tr key='info'>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Employee ID</th>
				</tr>
				</thead>
			<tbody>
                {technicians.map(person => {
                    return (
                    <tr key={person.id}>
                        <td> {person.first_name}</td>
                        <td> {person.last_name}</td>
                        <td> {person.employee_id}</td>
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

export default ListTechnicians
