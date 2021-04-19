import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { pedirPokemons } from '../../actions/pokemons'
import Paginacion from '../ui/Paginacion'
import Buscador from '../ui/pokemons/Buscador'
import ContenedorPokemons from '../ui/pokemons/ContenedorPokemons'

const PokemonsPage = () => {
    const dispatch = useDispatch();
    const {buscarPokemon,pageActiva} = useSelector(state => state.pokemons)

    useEffect(() => {
        localStorage.setItem('pagePokemon',JSON.stringify(pageActiva))
        dispatch(pedirPokemons(pageActiva))
    }, [dispatch,pageActiva])
    
    return (
        <Container className="mt-5 flex-center">
            <Row>
                <Col xs={12} lg={6} className="flex-center mb-5">
                    <Buscador />
                </Col>
                {(!buscarPokemon) && (
                    <Col xs={12} lg={6}>
                        <Paginacion />
                    </Col>
                )}
                <Col xs={12} className="my-4">
                    <ContenedorPokemons />
                </Col>
                {(!buscarPokemon) && (
                    <Col xs={12}>
                        <Paginacion />
                        <div className="mb-5"></div>
                    </Col>
                )}
            </Row>
            
        </Container>
        
    )
}

export default PokemonsPage
