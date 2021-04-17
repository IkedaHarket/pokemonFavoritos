import React from 'react'
import { useSelector } from 'react-redux'

const Paginacion = ({setPage}) => {

    const {nextPage,previousPage} = useSelector(state => state.pokemons)
    
    const handleAnterior = ()=>{
        setPage(page=>(page - 1))
    }
    const handleSiguiente = ()=>{
        setPage(page=>(page + 1))
    }
    return (
        <div className="paginacion">
            {
                (previousPage) &&
                <button
                onClick={handleAnterior}
                className="boton"
                >
                    Anterior
                </button>
            }
            {
                (nextPage) &&
                <button
                onClick={handleSiguiente}
                className="boton"
                >
                    Siguiente
                </button>
            }
        </div>
    )
}

export default Paginacion
