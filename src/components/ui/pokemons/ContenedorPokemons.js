import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CardPokemon from './CardPokemon'

const ContenedorPokemons = () => {

    const {pokemons} = useSelector(state => state.pokemons)

    return (
        <Row className="flex-center">
            {
                pokemons.map( pokemon=>(
                    (pokemon.sprites.other.dream_world.front_default) && (
                        <Col xs={12} sm={6} lg={4} xl={3} key={pokemon.id} className="flex-center">
                            <CardPokemon {...pokemon}/>
                        </Col>
                    )
                    
                ))
            }
        </Row>
    )
}

export default ContenedorPokemons
