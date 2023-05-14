import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./assets/logo.png"


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black navbar-fixed-top">
      <div className="container">
        <div className='navbar-size'>
          <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="Logo"/></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sales</a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/sales/new'>New Sale</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/sales/list'>Recent Sales</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/salespeople/history'>Salesperson History</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Service</a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/appointments/create'>Request a Service Appointment</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/appointments/list'>Service Appointments</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/appointments/history'>Service History</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Inventory</a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
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
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Our Staff</a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/technicians/list'>Technicians</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink className='nav-link' to='/salespeople/list'>Salespeople</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Management</a>
              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                <li className='nav-item'>
                <NavLink className='nav-link' to='/manufacturers/create'>New Manufacturer</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/models/create'>New Model</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/automobiles/create'>New Automobile</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/technicians/create'>Add a Technician</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/salespeople/create'>Add a Salesperson</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
