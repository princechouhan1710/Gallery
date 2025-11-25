import React from 'react'
import Navbar from './Layout/Navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from './Layout/Footer.jsx';
import Form from './Pages/Form.jsx';
import './App.css'
import Gallery from './Pages/Gallery.jsx';

import { Route, Routes, useLocation } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
         <Route path='/Gallery' element={<Gallery/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
