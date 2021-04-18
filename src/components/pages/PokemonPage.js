import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearPokemonActivo } from '../../actions/pokemons';
import { traducirHabitat, traducirTipo } from '../../helpers/traductores';

const PokemonPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const pokemonActivo = JSON.parse(localStorage.getItem('pokemonActivo')) || history.push('/');

    const {habitats} = useSelector(state => state.habitat)
    // const {tipos} = useSelector(state => state.tiposPokemons)

    const handleVolver = ()=>{
        dispatch(clearPokemonActivo());
    }
    let nombreHabitat = ''
    habitats.forEach(habitatBase=>{
        habitatBase.pokemon_species.forEach( habitat => {
            if(habitat.name === pokemonActivo.name) nombreHabitat = habitatBase.name
        })
    })
    nombreHabitat = traducirHabitat(nombreHabitat);
    const tipo = traducirTipo(pokemonActivo.types[0].type.name);
    return (
        <>
        <Container fluid className="mt-5">
            <Row className="pokemonPage">
                <Col xs={12} md={6} className="pokemonPage__img">
                    <img src={pokemonActivo?.sprites.other.dream_world.front_default} alt={pokemonActivo?.name}/>
                </Col>
                <Col xs={12} md={6} className="pokemonPage__content">
                    <h3>{pokemonActivo?.name.toUpperCase()}</h3>
                    <p><strong>Habitat:</strong> {nombreHabitat}</p>
                    <p><strong>Tipo:</strong> {tipo}</p>
                    <Link
                    to="/pokemons"
                    className="boton"
                    onClick={handleVolver}
                    >
                        Volver
                    </Link>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default PokemonPage
