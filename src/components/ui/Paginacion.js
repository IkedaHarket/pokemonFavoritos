import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPaginaActiva } from '../../actions/pokemons'

const Paginacion = () => {

    const {nextPage,previousPage,pageActiva} = useSelector(state => state.pokemons)
    const dispatch = useDispatch()
    
    const handleAnterior = ()=>{
        dispatch(setPaginaActiva(pageActiva-1))
    }
    const handleSiguiente = ()=>{
        dispatch(setPaginaActiva(pageActiva+1))
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
            {pageActiva}
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
