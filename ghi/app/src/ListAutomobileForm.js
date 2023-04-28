import { useEffect, useState } from 'react';

function ListAutomobileForm () {
    const [autos, setAutos] = useState([])

    const fetchData = async () => {
	    const url = "http://localhost:8100/api/automobiles/";


	    const response = await fetch(url);


	    if (response.ok) {
		    const data = await response.json();
		    setAutos(data.autos)
	    } else {
		    console.log('its not working');
	    }
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div className="px-4 py-5 my-5 text-center">
		<h1 className="display-5 fw-bold">If you want it, we have it!</h1>
		<div className="col-lg-6 mx-auto">
		</div>
		<table className="table table-striped mx-auto">
			<thead>
				<tr key='info'>
					<th>Manufacturer</th>
					<th>Model</th>
					<th>Year</th>
					<th>Color</th>
					<th>Vin</th>
					<th>Sold</th>
					<th>Picture</th>
				</tr>
			</thead>
			<tbody>
                {autos.map(auto => {
                    return (
                    <tr key={auto.id}>
						<td> {auto.model.manufacturer.name}</td>
                        <td> {auto.model.name}</td>
						<td> {auto.year}</td>
						<td> {auto.color}</td>
						<td> {auto.vin}</td>
						<td> {auto.sold ? "Yes" : "No"}</td>
						<td> <img width='100' src={auto.model.picture_url}/>
						</td>
					</tr>
                    )
                    })}
			</tbody>
		</table>
	</div>
    )
}

export default ListAutomobileForm
