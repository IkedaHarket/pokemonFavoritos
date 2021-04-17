import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { pedirPokemons } from '../../actions/pokemons'
import Paginacion from '../ui/Paginacion'
import Buscador from '../ui/pokemons/Buscador'
import ContenedorPokemons from '../ui/pokemons/ContenedorPokemons'

const PokemonsPage = () => {
    const dispatch = useDispatch();
    const {buscarPokemon} = useSelector(state => state.pokemons)
    const [page, setPage] = useState(0)

    useEffect(() => {
        dispatch(pedirPokemons(page))
    }, [dispatch,page])

    return (
        <Container className="mt-5 flex-center">
            <Row>
                <Col xs={12} lg={6} className="flex-center mb-5">
                    <Buscador />
                </Col>
                {(!buscarPokemon) && (
                    <Col xs={12} lg={6}>
                        <Paginacion setPage={setPage}/>
                    </Col>
                )}
                <Col xs={12} className="my-4">
                    <ContenedorPokemons />
                </Col>
                {(!buscarPokemon) && (
                    <Col xs={12}>
                        <Paginacion setPage={setPage}/>
                    </Col>
                )}
            </Row>
        </Container>
    )
}

export default PokemonsPage
