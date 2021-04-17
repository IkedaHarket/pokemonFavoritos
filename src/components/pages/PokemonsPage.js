import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Paginacion from '../ui/Paginacion'

const PokemonsPage = () => {
    return (
        <Container className="mt-5 flex-center">
            <Row>
                <Col xs={12}>
                    <Paginacion />
                </Col>
            </Row>
        </Container>
    )
}

export default PokemonsPage
