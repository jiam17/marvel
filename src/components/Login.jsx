import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import '../assets/css/stile.css'

export default function Login() {
    //creando una constante para validar la autenticacion
    const { loginWithRedirect } = useAuth0();

    return (
        <div className='page-container'>
        <main className='fondo-login img-fluid'>
        <div className="container d-flex justify-content-center align-items-center m-5">
        <div className='card card-text-center card-login'>
            <div className='card-body'>
            <h5 className="card-title">Bienvenido a la web</h5>
            <p className="card-text">antes de continuar inicia sesion</p>
            <button className='btn btn-primary' onClick={ () => loginWithRedirect()}>¡vamos!</button>
            </div>
        </div>
        </div>
        </main>
        </div>
     
            
    )
}
