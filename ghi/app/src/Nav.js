import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">CarCar</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className='nav-item'>
              <NavLink className='nav-link' to='/technicians/list'>Technicians</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/technicians/create'>Add a Technician</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/appointments/history'>Service History</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/appointments/list'>Service Appointments</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/appointments/create'>Request a Service Appointment</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/manufacturers/list'>Manufacturers</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/models/list'>Models</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to='/automobiles/list'>Automobiles</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
