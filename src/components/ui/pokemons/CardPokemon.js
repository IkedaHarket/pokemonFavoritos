import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { pokemonActivoSet } from '../../../actions/pokemons'

const CardPokemon = ({...pokemon}) => {
    const dispatch = useDispatch()

    const {id,name,sprites} = pokemon

    const handlePokemonActive =()=>{
        dispatch(pokemonActivoSet(pokemon))
    }
    return (
        <Link 
        onClick={handlePokemonActive}
        className="cardPokemon"
        to={`/pokemon/${id}`}
        >
            <div className="cardPokemon__img">
                <img src={sprites.other.dream_world.front_default} alt={name}/>
            </div>
            <h6>{name}</h6>
        </Link>
    )
}

export default CardPokemon
