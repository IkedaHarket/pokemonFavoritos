import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { pedirPokemons } from '../../actions/pokemons'
import Paginacion from '../ui/Paginacion'
import ContenedorPokemons from '../ui/pokemons/ContenedorPokemons'

const PokemonsPage = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(0)

    useEffect(() => {
        dispatch(pedirPokemons(page))
    }, [dispatch,page])

    return (
        <Container className="mt-5 flex-center">
            <Row>
                <Col xs={12}>
                    <Paginacion setPage={setPage}/>
                </Col>
                <Col xs={12} className="my-4">
                    <ContenedorPokemons />
                </Col>
                <Col xs={12}>
                    <Paginacion setPage={setPage}/>
                </Col>
            </Row>
        </Container>
    )
}

export default PokemonsPage
