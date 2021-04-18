import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { clearPokemonActivo } from '../../actions/pokemons';
import { agregarIconoTipo } from '../../helpers/agregarIcono';
import { traducirHabilidad, traducirHabitat, traducirTipo } from '../../helpers/traductores';

const PokemonPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const pokemonActivo = JSON.parse(localStorage.getItem('pokemonActivo')) || history.push('/');

    const {habitats} = useSelector(state => state.habitat)

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

    const juegos = pokemonActivo.game_indices.map(juego=>juego.version.name)

    const habilidades = pokemonActivo.abilities.map(habilidad=>habilidad.ability.name)

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
                    <p className="pokemonPage__content-tipo"><strong>Tipo: </strong> 
                        <img src={agregarIconoTipo(tipo)} alt={tipo}/> {tipo}
                    </p>
                    <p className="pokemonPage__content-juegos"><strong>Juegos: </strong><br />
                        {
                            juegos.map(juego=>(`${juego}, `))
                        }
                    </p>
                    <p className="pokemonPage__content-habilidades"><strong>Habilidades: </strong><br />
                        {
                            habilidades.map(habilidad=>(`${traducirHabilidad(habilidad)}, `))
                        }
                    </p>
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
