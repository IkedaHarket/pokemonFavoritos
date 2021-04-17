import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buscarpokemons, clearBusquedaPokemons, setearBusquedaPokemons } from '../../../actions/pokemons'
import { useForm } from '../../../hooks/useForm'

const initialState= {pokemon:''}
const Buscador = () => {

    const dispatch = useDispatch()
    const {buscarPokemon} = useSelector(state => state.pokemons)
    const [formValues,handleInputChange] = useForm(initialState)
    const {pokemon} = formValues;

    const handleSubmit = e =>{
        e.preventDefault();
        if(pokemon.length === 0) return
        dispatch(setearBusquedaPokemons(true))
        dispatch(buscarpokemons(pokemon))
        
    }
    const handleVerTodo = ()=>{
        dispatch(clearBusquedaPokemons())
    }
    return (
        <form 
        className="buscador flex-center"
        onSubmit={handleSubmit}
        >
            <input 
            type="text"
            placeholder="pokemon"
            autoComplete="off"
            name="pokemon"
            value={pokemon}
            onChange={handleInputChange}
            />
            <button
            type="submit"
            className="boton"
            >
                Buscar
            </button>
            {
            (buscarPokemon) && 
            <button
            onClick={handleVerTodo}
            className="boton"
            >
                VerTodo
            </button>
            }
        </form>
    )
}

export default Buscador
