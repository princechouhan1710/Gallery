import React from 'react'

import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div>
   <nav class="navbar navbar-expand-lg" style={{background:"#111"}}>
  <div class="container-fluid justify-content-between">

    <a class="navbar-brand text-primary " href="#" style={{ fontWeight:"bold", fontSize:"1.6rem"}}>
      ✦ MyGallery
    </a>

    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mx-auto mb-2 mb-lg-0 text-center">

        <li class="nav-item mx-3">
          <NavLink  to='/Gallery' class="nav-link text-success" href="#" 
             style={{color:"#00eaff", fontSize:"1.1rem",fontWeight:"500"}}>
            Gallery
         </NavLink> 
        </li>

        <li class="nav-item mx-3">
          <NavLink to='/' class="nav-link text-success" href="#" 
             style={{ fontSize:"1.1rem" ,fontWeight:"500"}}>
            Form
         </NavLink> 
        </li>

      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
