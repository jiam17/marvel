import axios from 'axios'
import React, { useState } from 'react'

export default function BuscarPersonajes() {
    //asignando 2 estados
    //un estado para todos los personajes y otro estado para un personaje en especifico por su nombre

    const [personajes, setPersonajes] = useState([]);
    const [name, setName] = useState("");

    const obtenerPersonajeByNombre = () => {
        axios.get(`https://gateway.marvel.com/v1/public/characters?name=${name}&ts=1&apikey=c1900eb52930ed1b7ce840e189c99d54&hash=5781e9271c1ff2dab15c638283e5727f`).then((response) => {
            console.log(response.data.data.results);
            setPersonajes(response.data.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    console.log(personajes);

    const handleSubmit = (e) => {
        obtenerPersonajeByNombre();
        //cancelamos el evento submit para que no lo vuelva a renderizar
        e.preventDefault();
    }
    
    return (
        <div className='bg-dark text-white'>
            <div className='container '>
                <h1 className='text-center pt-4'>Encuentra a tu personaje favorito!</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Ingresa el nombre del personaje</label>
                    <input type="text" className='form-control w-50' onChange={handleName}/>

                    <button className='btn btn-primary m-5' type='submit'>Ver Personaje</button>
                </form>
                <br />

                {
                    personajes.length === 0 ? (
                        <div className="alert alert-danger mb-4" role="alert">
                            ingresa tu personaje (en ingles)
                        </div>
                    ) : (
                        <>
                                                     {
                         personajes.map((personaje, indice) => {
                            return(
                                 <div className='p-4'>
                                    <h2 className='text-center'>Hola Soy {personaje.name}</h2>
                                        <div className='row'>
                                              <div className='col-md-4'>
                                                <img src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} alt={personaje.name} className='img-fluid'/>
                                                </div>

                                                <div className='col-md-8'>
                                                    <h3 className='text-center'>comics</h3>
                                                    <ol className='px-5'>
                                                        {
                                                            personaje.comics.items.map((comic, indice)=> {
                                                                return (
                                                                    <li>{comic.name}</li>
                                                                )
                                                            })
                                                        }
                                                    </ol>

                                                </div>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>

                    )
                }


            </div>
        </div>
    )
}