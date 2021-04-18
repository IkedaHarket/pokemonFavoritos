import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import CardPokemonFavorito from '../ui/pokemons/CardPokemonFavorito'

const Favoritos = () => {
    const {favoritos} = useSelector(state => state.pokemons)
    return (
        <>
        <h3 className="favoritosPage">Favoritos</h3>
        <Container>
            <Row className="flex-center">
            {
                favoritos.map( pokemon=>(
                    (pokemon.sprites.other.dream_world.front_default) && (
                        <Col xs={12} sm={6} lg={4} xl={3} key={pokemon.id} className="flex-center">
                            <CardPokemonFavorito {...pokemon}/>
                        </Col>
                    )
                    
                ))
            }
        </Row>
        </Container>
        </>
    )
}

export default Favoritos
