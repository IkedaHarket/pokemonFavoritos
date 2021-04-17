import React from 'react'

const CardPokemon = ({name,sprites}) => {
    return (
        <div className="cardPokemon">
            <div className="cardPokemon__img">
                <img src={sprites.other.dream_world.front_default} alt={name}/>
            </div>
            <h6>{name}</h6>
        </div>
    )
}

export default CardPokemon
