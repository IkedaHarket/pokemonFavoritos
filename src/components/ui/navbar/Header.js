import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Hamburger from './Hamburger'
import HeaderLogo from './HeaderLogo'
import MenuXS from './MenuXS'
import Navbar from './Navbar'

const Header = () => {
    return (
        <>
        <Container fluid className="header ">
            <header >
                <Row className="header__row ">
                    <Col xs={6} lg={4} className="header__logo">
                        <HeaderLogo />
                    </Col>
                    <Col lg={8} className="d-none d-lg-block">
                        <Navbar />
                    </Col>
                    <Col xs={6} className="flex-center d-lg-none">
                        <Hamburger />
                    </Col>
                </Row>
            </header>
        </Container>
        <Row>
            <Col xs={12} className="d-lg-none ">
                <MenuXS />
            </Col>
        </Row>
        </>
    )
}

export default Header
