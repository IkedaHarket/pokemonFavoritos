import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { agregarFavoritoApp, pokemonActivoSet, quitarFavoritoApp } from '../../../actions/pokemons'
import { iconos } from '../../../images/icons'

const CardPokemonFavorito = ({...pokemon}) => {

    const dispatch = useDispatch()
    const {favoritos} = useSelector(state => state.pokemons)
    const {id,name,sprites} = pokemon

    const handlePokemonActive =()=>{
        dispatch(pokemonActivoSet(pokemon))
    }
    let esFavorito = false;
    favoritos.forEach(favorito =>{
        if(favorito.id === pokemon.id) return esFavorito = true
    })
    const handleAddFavorito = ()=>{
        if (esFavorito){
            dispatch(quitarFavoritoApp(pokemon.id))
        }else{
            dispatch(agregarFavoritoApp(pokemon))
        }
    }
    return (
        <div className='cardPokemon'>
            <div className={`cardPokemon__fav ${(esFavorito) && 'activeFavPokemonCard'}`}>
                <img 
                src={iconos.iconEstrella}
                className=""
                alt="Star"
                onClick={handleAddFavorito}
                />
            </div>
            <Link
            onClick={handlePokemonActive}
            className="cardPokemon__link"
            to={`/pokemon/${id}`}
            >   
                
                <div className="cardPokemon__img">
                    <img src={sprites.other.dream_world.front_default} alt={name}/>
                </div>
                <h6>{name}</h6>
            </Link>
        </div>
    )
}

export default CardPokemonFavorito
