import { useEffect, useState } from 'react';

function ListManufacturerForm () {
    const [manufacturers, setManufacturers] = useState([])

    const fetchData = async () => {
	    const url = "http://localhost:8100/api/manufacturers/";


	    const response = await fetch(url);


	    if (response.ok) {
		    const data = await response.json();
		    setManufacturers(data.manufacturers)
	    } else {
		    console.log('its not working');
	    }
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div className="px-4 py-5 my-5 text-center">
		<h1 className="display-5 fw-bold">What we sell!</h1>
		<div className="col-lg-6 mx-auto">
		</div>
		<table className="table table-striped mx-auto">
			<thead>
				<tr key='info'>
					<th key='first_name'>Manufacturers</th>

				</tr>
				</thead>
			<tbody>
                {manufacturers.map(manufacturer => {
                    return (
                    <tr key={manufacturer.id}>
                        <td> {manufacturer.name}</td>
					</tr>
                    )
                    })}
			</tbody>
		</table>
	</div>
    )
}

export default ListManufacturerForm
