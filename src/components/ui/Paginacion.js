import React from 'react'
import { useSelector } from 'react-redux'

const Paginacion = () => {

    const {nextPage,previousPage} = useSelector(state => state.pokemons)

    return (
        <div className="paginacion">
            {
                (!previousPage) &&
                <button
                className="boton"
                >
                    Anterior
                </button>
            }
            {
                (!nextPage) &&
                <button
                className="boton"
                >
                    Siguiente
                </button>
            }
        </div>
    )
}

export default Paginacion
