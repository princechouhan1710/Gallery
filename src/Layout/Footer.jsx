import React from 'react'

function Footer() {
  return (
    <div className='my-3 '>
      <footer className="p-5 bg-dark text-white vw-99">
      <div className="row d-flex  justify-content-between w-100">
        <div className="col-6 col-md-2 mb-3">
      
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Business</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Teach on Gallery</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Get the App</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">About Us</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Careers</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Blog</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Help and Support</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Affiliate</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-white">Investor</a>
            </li>
          </ul>
        </div>
        
        <div className="col-md-5 col-6">
          <form>
            <h1 style={{fontFamily:" Pacifico"}}>Gallery</h1>
            <p> @2025 Company, Inc. All rights reserved.</p>
            
          </form>
        </div>
      </div>

    </footer>
    </div>
  )
}

export default Footer
