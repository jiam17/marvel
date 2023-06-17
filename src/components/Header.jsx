import React from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import Comics from './Comics'
import Series from './series';
import BuscarPersonajes from './BuscarPersonajes';
import Logout from './Logout';
import Perfil from './Perfil'

export default function header() {
  return (
    <BrowserRouter>
    <header>
      <nav className="navbar navbar-expand-lg ">
      <div className="boton-container bg-white bg-opacity-50 m-2 border-boton">
          <button className="navbar-toggler btn m-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
           </button>
      </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/comics" className="nav-link link">Comic</Link>
            </li>
            <li className="nav-item">
              <Link to="/series" className="nav-link link">Series</Link>
            </li>
            <li className="nav-item">
              <Link to="/perfil" className="nav-link link">Perfil</Link>
            </li>
            <li className="nav-item">
              <Logout />
            </li>
          </ul>
        </div>
      </nav>
    </header>
        {/**seccion de todas las rutas
         * path = propiedad que asigna nombre de la ruta para la reprencia 
         del hipervinculo
         element = componente en el que se va dirigir la ruta
         */}
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/comics' element={<Comics />}/>
            <Route path='/series' element={<Series />}/>
            <Route path='/busqueda' element={<BuscarPersonajes />}/>
            <Route path='/perfil' element={<Perfil />}/>

        </Routes>
    </BrowserRouter>
  )
} 