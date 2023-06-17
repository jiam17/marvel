import React, {useState, useEffect} from 'react'
import axios from 'axios'


export default function Comics() {
  const [comics, setComics] = useState([]);

  const obtenerComics = () => {
    axios.get("https://gateway.marvel.com/v1/public/comics?ts=1&apikey=30de36485b81b5161f34047676ad5c12&hash=aaeac2018c248e775edbd406b849f5c0").then((response) => {
        console.log(response);
        setComics(response.data.data.results);
    }).catch((error) => {
        console.log(error);
    })
  }
    useEffect(() => {
      obtenerComics();
  }, [])

  
  return (
    <div className='container'>
            <h1 className='text-center text-dark'>Lista de comics</h1>
            <div className='row'>
                {
                    comics.map((comics, indice) =>{
                        return (
<div className='col-md-4 mt-4 card-height' key={indice}>
    <div className='card h-100'>
        <h5 className='card-header'>Titulo: {comics.title}</h5>
        <h5 className='card-header'>Nombre de serie: {comics.series.name}</h5>
        <div className='card-body img-comics gap'>
            <img
                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                alt={comics.title}
                className='card-img-top img-fluid comicsImg'
            />
            <a href={comics.urls[0].url} className='btn btn-outline-success mt-3' target='_blank'>Ver detalles</a>
        </div>
    </div>
</div>

                        )
                    })
                }

            </div>
        </div>

    
  )
}
