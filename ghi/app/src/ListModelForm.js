import { useEffect, useState } from 'react';

function ListModelForm () {
    const [models, setModels] = useState([])

    const fetchData = async () => {
	    const url = "http://localhost:8100/api/models/";


	    const response = await fetch(url);


	    if (response.ok) {
		    const data = await response.json();
		    setModels(data.models)
	    } else {
		    console.log('its not working');
	    }
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <div className="px-4 py-5 my-5 text-center">
		<h1 className="display-5 fw-bold">Come See Our Cars!</h1>
		<div className="col-lg-6 mx-auto">
		</div>
		<table className="table table-striped mx-auto">
			<thead>
				<tr key='info'>
					<th key='models'>Models</th>
					<th key='manufacturer'>Manufacturer</th>
					<th key='picture_url'>Image</th>
				</tr>
				</thead>
			<tbody>
                {models.map(model => {
                    return (
                    <tr key={model.id}>
                        <td> {model.name}</td>
						<td> {model.manufacturer.name}</td>
						<td> <img width='100' src={model.picture_url}/>
						</td>
					</tr>
                    )
                    })}
			</tbody>
		</table>
	</div>
    )
}

export default ListModelForm
